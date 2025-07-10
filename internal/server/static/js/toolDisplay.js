// helper function to create form inputs for parameters
function createParamInput(param, toolId) {
    const paramItem = document.createElement('div');
    paramItem.className = 'param-item';

    const label = document.createElement('label');
    const inputId = `param-${toolId}-${param.name}`;
    label.setAttribute('for', inputId);
    label.textContent = param.label;
    paramItem.appendChild(label);

    let inputElement;
    if (param.type === 'select') {
        inputElement = document.createElement('select');
        param.options.forEach(optionValue => {
            const option = document.createElement('option');
            option.value = optionValue;
            option.textContent = optionValue;
            if (optionValue === param.defaultValue) {
                option.selected = true;
            }
            inputElement.appendChild(option);
        });
    } else if (param.type === 'textarea') { // Handle textarea for arrays
        inputElement = document.createElement('textarea');
        inputElement.rows = 3;
        inputElement.value = param.defaultValue || '';
        if (param.valueType && param.valueType.startsWith('array')) {
             inputElement.placeholder = 'E.g., ["item1", "item2"] or [1, 2, 3]';
        }
    } else { // text, number, etc.
        inputElement = document.createElement('input');
        inputElement.type = param.type;
        inputElement.value = param.defaultValue || '';
    }
    // Common properties
    inputElement.id = inputId;
    inputElement.name = param.name;
    paramItem.appendChild(inputElement);
    return paramItem;
}

function displayResults(results, responseArea, prettify) {
    if (results === null || results === undefined) {
        // responseArea.value = ''; // Keep placeholder or old error message
        return;
    }
    try {
        if (prettify) {
            responseArea.value = JSON.stringify(JSON.parse(results.result), null, 2);
        } else {
            responseArea.value = JSON.stringify(JSON.parse(results.result));
        }
    } catch (error) {
        console.error("Error stringifying results:", error);
        responseArea.value = "Error displaying results.";
    }
}

// function to run the tool (calls API version of endpoint)
async function handleRunTool(toolId, form, responseArea, parameters, prettifyCheckbox, updateLastResults) {
    responseArea.value = 'Running tool...';
    updateLastResults(null); // Clear last results before new run
    const formData = new FormData(form);
    const typedParams = {};

    for (const param of parameters) {
        const rawValue = formData.get(param.name);

        if (rawValue === null || rawValue === undefined || rawValue === '') {
            if (param.required) {
                 console.warn(`Required parameter ${param.name} is missing.`);
            }
            typedParams[param.name] = null;
            continue;
        }

        const valueType = param.valueType;

        try {
            if (valueType && valueType.startsWith('array<')) {
                const elementType = valueType.substring(6, valueType.length - 1);
                let parsedArray;
                try {
                    parsedArray = JSON.parse(rawValue);
                } catch (e) {
                    throw new Error(`Invalid JSON format for ${param.name}. ${e.message}`);
                }

                if (!Array.isArray(parsedArray)) {
                    throw new Error(`Input for ${param.name} must be a JSON array (e.g., ["a", "b"]).`);
                }

                if (elementType === 'number') {
                    typedParams[param.name] = parsedArray.map((item, index) => {
                        const num = Number(item);
                        if (isNaN(num)) {
                            throw new Error(`Invalid number "${item}" found in array for ${param.name} at index ${index}.`);
                        }
                        return num;
                    });
                } else if (elementType === 'boolean') {
                    typedParams[param.name] = parsedArray.map(item => item === true || String(item).toLowerCase() === 'true');
                } else { // string or other types
                    typedParams[param.name] = parsedArray;
                }
            } else {
                switch (valueType) {
                    case 'number':
                        const num = Number(rawValue);
                        if (isNaN(num)) {
                            throw new Error(`Invalid number input for ${param.name}: ${rawValue}`);
                        }
                        typedParams[param.name] = num;
                        break;
                    case 'boolean':
                        typedParams[param.name] = rawValue === 'true';
                        break;
                    case 'string':
                    default:
                        typedParams[param.name] = rawValue;
                        break;
                }
            }
        } catch (error) {
            console.error('Error processing parameter:', param.name, error);
            responseArea.value = `Error for ${param.name}: ${error.message}`;
            return; // Stop processing
        }
    }

    console.log('Running tool:', toolId, 'with typed params:', typedParams);
    try {
        const response = await fetch(`/api/tool/${toolId}/invoke`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(typedParams)
        });
        if (!response.ok) {
            const errorBody = await response.text();
            throw new Error(`HTTP error ${response.status}: ${errorBody}`);
        }
        const results = await response.json();
        updateLastResults(results); // Update the stored results
        displayResults(results, responseArea, prettifyCheckbox.checked); // Display formatted results
    } catch (error) {
        console.error('Error running tool:', error);
        responseArea.value = `Error: ${error.message}`;
        updateLastResults(null); // Clear results on error
    }
}

// renders the tool display area
export function renderToolInterface(tool, containerElement) {
    containerElement.innerHTML = '';
    const toolId = tool.id;

    let lastResults = null; // Store the most recent successful result object

    // Function to update lastResults, closure to keep it private to this scope
    const updateLastResults = (newResults) => {
        lastResults = newResults;
    };

    const gridContainer = document.createElement('div');
    gridContainer.className = 'tool-details-grid';

    const toolInfoContainer = document.createElement('div');
    toolInfoContainer.className = 'tool-info';

    const nameBox = document.createElement('div');
    nameBox.className = 'tool-box tool-name';
    nameBox.innerHTML = `<h5>Name:</h5><p>${tool.name}</p>`;
    toolInfoContainer.appendChild(nameBox);

    const descBox = document.createElement('div');
    descBox.className = 'tool-box tool-description';
    descBox.innerHTML = `<h5>Description:</h5><p>${tool.description}</p>`;
    toolInfoContainer.appendChild(descBox);

    gridContainer.appendChild(toolInfoContainer);

    const paramsContainer = document.createElement('div');
    paramsContainer.className = 'tool-params tool-box';
    paramsContainer.innerHTML = '<h5>Parameters:</h5>';
    const form = document.createElement('form');
    form.id = `tool-params-form-${toolId}`;

    tool.parameters.forEach(param => {
        form.appendChild(createParamInput(param, toolId));
    });
    paramsContainer.appendChild(form);

    const runButton = document.createElement('button');
    runButton.className = 'run-tool-btn';
    runButton.textContent = 'Run Tool';
    paramsContainer.appendChild(runButton);

    gridContainer.appendChild(paramsContainer);
    containerElement.appendChild(gridContainer);

    // Response Area
    const responseContainer = document.createElement('div');
    responseContainer.className = 'tool-response tool-box';

    const responseHeader = document.createElement('h5');
    responseHeader.textContent = 'Response:';
    responseContainer.appendChild(responseHeader);

    // Prettify Checkbox
    const prettifyId = `prettify-${toolId}`;
    const prettifyLabel = document.createElement('label');
    prettifyLabel.setAttribute('for', prettifyId);
    prettifyLabel.textContent = 'Prettify JSON';
    prettifyLabel.style.display = 'inline-block';
    prettifyLabel.style.marginLeft = '10px';
    prettifyLabel.style.verticalAlign = 'middle';
    prettifyLabel.style.cursor = 'pointer';

    const prettifyCheckbox = document.createElement('input');
    prettifyCheckbox.type = 'checkbox';
    prettifyCheckbox.id = prettifyId;
    prettifyCheckbox.checked = true; // Default to pretty
    prettifyCheckbox.style.verticalAlign = 'middle';
    prettifyCheckbox.style.cursor = 'pointer';

    const prettifyDiv = document.createElement('div');
    prettifyDiv.style.marginBottom = '5px';
    prettifyDiv.appendChild(prettifyCheckbox);
    prettifyDiv.appendChild(prettifyLabel);
    responseContainer.appendChild(prettifyDiv);

    const responseAreaId = `tool-response-area-${toolId}`;
    const responseArea = document.createElement('textarea');
    responseArea.id = responseAreaId;
    responseArea.readOnly = true;
    responseArea.placeholder = 'Results will appear here...';
    responseArea.style.width = 'calc(100% - 12px)';
    responseArea.rows = 10;
    responseContainer.appendChild(responseArea);

    containerElement.appendChild(responseContainer);

    // Event Listeners
    prettifyCheckbox.addEventListener('change', () => {
        if (lastResults) {
            displayResults(lastResults, responseArea, prettifyCheckbox.checked);
        }
    });

    runButton.addEventListener('click', (event) => {
        event.preventDefault();
        handleRunTool(toolId, form, responseArea, tool.parameters, prettifyCheckbox, updateLastResults);
    });
}
