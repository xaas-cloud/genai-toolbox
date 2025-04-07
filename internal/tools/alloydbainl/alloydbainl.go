// Copyright 2025 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package alloydbainl

import (
	"context"
	"fmt"
	"strings"

	"github.com/googleapis/genai-toolbox/internal/sources"
	"github.com/googleapis/genai-toolbox/internal/sources/alloydbpg"
	"github.com/googleapis/genai-toolbox/internal/tools"
	"github.com/jackc/pgx/v5/pgxpool"
)

const ToolKind string = "alloydb-ai-nl"

type compatibleSource interface {
	PostgresPool() *pgxpool.Pool
}

// validate compatible sources are still compatible
var _ compatibleSource = &alloydbpg.Source{}

var compatibleSources = [...]string{alloydbpg.SourceKind}

type Config struct {
	Name               string           `yaml:"name" validate:"required"`
	Kind               string           `yaml:"kind" validate:"required"`
	Source             string           `yaml:"source" validate:"required"`
	Description        string           `yaml:"description" validate:"required"`
	NLConfig           string           `yaml:"nlConfig" validate:"required"`
	AuthRequired       []string         `yaml:"authRequired"`
	NLConfigParameters tools.Parameters `yaml:"nlConfigParameters"`
}

// validate interface
var _ tools.ToolConfig = Config{}

func (cfg Config) ToolConfigKind() string {
	return ToolKind
}

func (cfg Config) Initialize(srcs map[string]sources.Source) (tools.Tool, error) {
	// verify source exists
	rawS, ok := srcs[cfg.Source]
	if !ok {
		return nil, fmt.Errorf("no source named %q configured", cfg.Source)
	}

	// verify the source is compatible
	s, ok := rawS.(compatibleSource)
	if !ok {
		return nil, fmt.Errorf("invalid source for %q tool: source kind must be one of %q", ToolKind, compatibleSources)
	}

	numParams := len(cfg.NLConfigParameters)
	quotedNameParts := make([]string, 0, numParams)
	placeholderParts := make([]string, 0, numParams)

	for i, paramDef := range cfg.NLConfigParameters {
		name := paramDef.GetName()
		escapedName := strings.ReplaceAll(name, "'", "''") // Escape for SQL literal
		quotedNameParts = append(quotedNameParts, fmt.Sprintf("'%s'", escapedName))
		placeholderParts = append(placeholderParts, fmt.Sprintf("$%d", i+2)) // $1 reserved
	}

	var paramNamesSQL string
	var paramValuesSQL string

	if numParams > 0 {
		paramNamesSQL = fmt.Sprintf("ARRAY[%s]", strings.Join(quotedNameParts, ", "))
		paramValuesSQL = fmt.Sprintf("ARRAY[%s]", strings.Join(placeholderParts, ", "))
	} else {
		paramNamesSQL = "ARRAY[]::TEXT[]"
		paramValuesSQL = "ARRAY[]::TEXT[]"
	}

	// execute_parameterized_query is the AlloyDB AI function that executes queries with PSV param names and values
	// The first parameter is the generated SQL query, which is passed as $1
	// The following params are the list of PSV values
	// Example SQL statement being executed:
	// SELECT * FROM parameterized_views.execute_parameterized_query(query => 'SELECT * FROM tickets_psv', param_names => ARRAY ['user_email'], param_values => ARRAY ['hailongli@google.com']);

	executePSVStmtFormat := "SELECT * FROM parameterized_views.execute_parameterized_query(query => $1, param_names =>%s, param_values => %s);"
	executePSVStmt := fmt.Sprintf(executePSVStmtFormat, paramNamesSQL, paramValuesSQL)

	newQuestionParam := tools.NewStringParameter(
		"question",                              // name
		"The natural language question to ask.", // description
	)

	cfg.NLConfigParameters = append([]tools.Parameter{newQuestionParam}, cfg.NLConfigParameters...)

	mcpManifest := tools.McpManifest{
		Name:        cfg.Name,
		Description: cfg.Description,
		InputSchema: cfg.NLConfigParameters.McpManifest(),
	}

	t := Tool{
		Name:         cfg.Name,
		Kind:         ToolKind,
		Parameters:   cfg.NLConfigParameters,
		Statement:    executePSVStmt,
		NLConfig:     cfg.NLConfig,
		AuthRequired: cfg.AuthRequired,
		Pool:         s.PostgresPool(),
		manifest:     tools.Manifest{Description: cfg.Description, Parameters: cfg.NLConfigParameters.Manifest()},
		mcpManifest:  mcpManifest,
	}

	return t, nil
}

// validate interface
var _ tools.Tool = Tool{}

type Tool struct {
	Name         string           `yaml:"name"`
	Kind         string           `yaml:"kind"`
	AuthRequired []string         `yaml:"authRequired"`
	Parameters   tools.Parameters `yaml:"parameters"`

	Pool        *pgxpool.Pool
	Statement   string
	NLConfig    string
	manifest    tools.Manifest
	mcpManifest tools.McpManifest
}

func (t Tool) Invoke(params tools.ParamValues) ([]any, error) {
	sliceParams := params.AsSlice()
	if len(sliceParams) < 1 {
		return nil, fmt.Errorf("at least one parameter (nl_question) is required")
	}

	// 1. Generate the SQL query using alloydb_ai_nl.get_sql
	getSQLStmt := "SELECT alloydb_ai_nl.get_sql(nl_config_id => $1, nl_question => $2)->>'sql' AS SQL;"
	var generatedSQL string
	err := t.Pool.QueryRow(context.Background(), getSQLStmt, t.NLConfig, sliceParams[0]).Scan(&generatedSQL)
	if err != nil {
		return nil, fmt.Errorf("failed to generate SQL query: %w", err)
	}

	// 2. Execute the generated query using formatted PSV statement
	execParams := append([]any{generatedSQL}, sliceParams[1:]...)
	results, err := t.Pool.Query(context.Background(), t.Statement, execParams...)
	if err != nil {
		return nil, fmt.Errorf("unable to execute query: %w. Query: %q, Values: %v", err, t.Statement, execParams)
	}
	defer results.Close()

	fields := results.FieldDescriptions()
	var out []any

	// 3. Process results into a slice of maps
	for results.Next() {
		values, err := results.Values()
		if err != nil {
			return nil, fmt.Errorf("unable to parse row values: %w", err)
		}
		if len(values) != len(fields) {
			return nil, fmt.Errorf("mismatch between number of fields (%d) and values (%d)", len(fields), len(values))
		}

		rowMap := make(map[string]any, len(fields))
		for i, fd := range fields {
			rowMap[fd.Name] = values[i]
		}
		out = append(out, rowMap)
	}

	if err := results.Err(); err != nil {
		return nil, fmt.Errorf("error iterating query results: %w", err)
	}

	// 4. Append the question and generated SQL itself to the output
	questionMap := map[string]string{"questionAsked": fmt.Sprintf("%s", sliceParams[0])}
	out = append(out, questionMap)
	sqlMap := map[string]string{"generatedSQL": generatedSQL}
	out = append(out, sqlMap)

	return out, nil
}

func (t Tool) ParseParams(data map[string]any, claims map[string]map[string]any) (tools.ParamValues, error) {
	return tools.ParseParams(t.Parameters, data, claims)
}

func (t Tool) Manifest() tools.Manifest {
	return t.manifest
}

func (t Tool) McpManifest() tools.McpManifest {
	return t.mcpManifest
}

func (t Tool) Authorized(verifiedAuthServices []string) bool {
	return tools.IsAuthorized(t.AuthRequired, verifiedAuthServices)
}
