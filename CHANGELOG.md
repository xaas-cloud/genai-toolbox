# Changelog

## [0.11.0](https://github.com/googleapis/genai-toolbox/compare/v0.10.0...v0.11.0) (2025-07-25)


### Features

* Add homebrew installation support for toolbox ([#936](https://github.com/googleapis/genai-toolbox/issues/936)) ([8ff60ca](https://github.com/googleapis/genai-toolbox/commit/8ff60ca430485676d5a259532da1d3e08c94cd0a))

## [0.10.0](https://github.com/googleapis/genai-toolbox/compare/v0.9.0...v0.10.0) (2025-07-25)


### Features

* Add `Map` parameters support ([#928](https://github.com/googleapis/genai-toolbox/issues/928)) ([4468bc9](https://github.com/googleapis/genai-toolbox/commit/4468bc920bbf27dce4ab160197587b7c12fcd20f))
* Add Dataplex source and tool ([#847](https://github.com/googleapis/genai-toolbox/issues/847)) ([30c16a5](https://github.com/googleapis/genai-toolbox/commit/30c16a559e8d49a9a717935269e69b97ec25519a))
* Add Looker source and tool ([#923](https://github.com/googleapis/genai-toolbox/issues/923)) ([c67e01b](https://github.com/googleapis/genai-toolbox/commit/c67e01bcf998e7b884be30ebb1fd277c89ed6ffc))
* Add support for null optional parameter ([#802](https://github.com/googleapis/genai-toolbox/issues/802)) ([a817b12](https://github.com/googleapis/genai-toolbox/commit/a817b120ca5e09ce80eb8d7544ebbe81fc28b082)), closes [#736](https://github.com/googleapis/genai-toolbox/issues/736)
* **prebuilt/alloydb-admin-config:** Add alloydb control plane as a prebuilt config ([#937](https://github.com/googleapis/genai-toolbox/issues/937)) ([0b28b72](https://github.com/googleapis/genai-toolbox/commit/0b28b72aa0ca2cdc87afbddbeb7f4dbb9688593d))
* **prebuilt/mysql,prebuilt/mssql:** Add generic mysql and mssql prebuilt tools ([#983](https://github.com/googleapis/genai-toolbox/issues/983)) ([c600c30](https://github.com/googleapis/genai-toolbox/commit/c600c30374443b6106c1f10b60cd334fd202789b))
* **server/mcp:** Support MCP version 2025-06-18 ([#898](https://github.com/googleapis/genai-toolbox/issues/898)) ([313d3ca](https://github.com/googleapis/genai-toolbox/commit/313d3ca0d084a3a6e7ac9a21a862aa31bf3edadd))
* **sources/mssql:** Add support for encrypt connection parameter ([#874](https://github.com/googleapis/genai-toolbox/issues/874)) ([14a868f](https://github.com/googleapis/genai-toolbox/commit/14a868f2a0780b94c2ca104419b2ff098778303b))
* **sources/firestore:** Add Firestore as Source ([#786](https://github.com/googleapis/genai-toolbox/issues/786)) ([2bb790e](https://github.com/googleapis/genai-toolbox/commit/2bb790e4f8194b677fe0ba40122d409d0e3e687e))
* **sources/mongodb:** Add MongoDB Source ([#969](https://github.com/googleapis/genai-toolbox/issues/969)) ([74dbd61](https://github.com/googleapis/genai-toolbox/commit/74dbd6124daab6192dd880dbd1d15f36861abf74))
* **tools/alloydb-wait-for-operation:** Add wait for operation tool with exponential backoff ([#920](https://github.com/googleapis/genai-toolbox/issues/920)) ([3f6ec29](https://github.com/googleapis/genai-toolbox/commit/3f6ec2944ede18ee02b10157cc048145bdaec87a))
* **tools/mongodb-aggregate:** Add MongoDB `aggregate` Tools ([#977](https://github.com/googleapis/genai-toolbox/issues/977)) ([bd399bb](https://github.com/googleapis/genai-toolbox/commit/bd399bb0fb7134469345ed9a1111ea4209440867))
* **tools/mongodb-delete:** Add MongoDB `delete` Tools ([#974](https://github.com/googleapis/genai-toolbox/issues/974)) ([78e9752](https://github.com/googleapis/genai-toolbox/commit/78e9752f620e065246f3e7b9d37062e492247c8a))
* **tools/mongodb-find:** Add MongoDB `find` Tools ([#970](https://github.com/googleapis/genai-toolbox/issues/970)) ([a747475](https://github.com/googleapis/genai-toolbox/commit/a7474752d8d7ea7af1e80a3c4533d2fd4154d897))
* **tools/mongodb-insert:** Add MongoDB `insert` Tools ([#975](https://github.com/googleapis/genai-toolbox/issues/975)) ([4c63f0c](https://github.com/googleapis/genai-toolbox/commit/4c63f0c1e402817a0c8fec611635e99290308d0e))
* **tools/mongodb-update:** Add MongoDB `update` Tools ([#972](https://github.com/googleapis/genai-toolbox/issues/972)) ([dfde52c](https://github.com/googleapis/genai-toolbox/commit/dfde52ca9a8e25e2f3944f52b4c2e307072b6c37))
* **tools/neo4j-execute-cypher:** Add neo4j-execute-cypher for Neo4j sources ([#946](https://github.com/googleapis/genai-toolbox/issues/946)) ([81d0505](https://github.com/googleapis/genai-toolbox/commit/81d05053b2e08338fd6eabe4849c309064f76b6b))
* **tools/neo4j-schema:** Add neo4j-schema tool ([#978](https://github.com/googleapis/genai-toolbox/issues/978)) ([be7db3d](https://github.com/googleapis/genai-toolbox/commit/be7db3dff263625ce64fdb726e81164996b7a708))
* **tools/wait:** Create wait for tool ([#885](https://github.com/googleapis/genai-toolbox/issues/885)) ([ed5ef4c](https://github.com/googleapis/genai-toolbox/commit/ed5ef4caea10ba1dbc49c0fc0a0d2b91cf341d3b))


### Bug Fixes

* Fix document preview pipeline for forked PRs ([#950](https://github.com/googleapis/genai-toolbox/issues/950)) ([481cc60](https://github.com/googleapis/genai-toolbox/commit/481cc608bae807d9e92497bc8863066916f7ef21))
* **prebuilt/firestore:** Mark database field as required in the firestore prebuilt tools ([#959](https://github.com/googleapis/genai-toolbox/issues/959)) ([15417d4](https://github.com/googleapis/genai-toolbox/commit/15417d4e0c7b173e81edbbeb672e53884d186104))
* **prebuilt/cloud-sql-mssql:** Correct source reference for execute_sql tool in cloud-sql-mssql.yaml prebuilt config ([#938](https://github.com/googleapis/genai-toolbox/issues/938)) ([d16728e](https://github.com/googleapis/genai-toolbox/commit/d16728e5c603eab37700876a6ddacbf709fd5823))
* **prebuilt/cloud-sql-mysql:** Update list_table tool ([#924](https://github.com/googleapis/genai-toolbox/issues/924)) ([2083ba5](https://github.com/googleapis/genai-toolbox/commit/2083ba50483951e9ee6101bb832aa68823cd96a5))
* Replace 'float' with 'number' in McpManifest ([#985](https://github.com/googleapis/genai-toolbox/issues/985)) ([59e23e1](https://github.com/googleapis/genai-toolbox/commit/59e23e17250a516e3931996114f32ac6526a4f8e))
* **server/api:** Add logger to context in tool invoke handler ([#891](https://github.com/googleapis/genai-toolbox/issues/891)) ([8ce311f](https://github.com/googleapis/genai-toolbox/commit/8ce311f256481e8f11ecb4aa505b95a562f394ef))
* **sources/looker:** Add agent tag to Looker API calls. ([#966](https://github.com/googleapis/genai-toolbox/issues/966)) ([f55dd6f](https://github.com/googleapis/genai-toolbox/commit/f55dd6fcd099f23bd89df62b268c4a53d16f3bac))
* **tools/bigquery-execute-sql:** Ensure invoke always returns a non-null value ([#925](https://github.com/googleapis/genai-toolbox/issues/925)) ([9a55b80](https://github.com/googleapis/genai-toolbox/commit/9a55b804821a6ccfcd157bcfaee7e599c4a5cb63))
* **tools/mysqlsql:** Unmarshal json data from database during invoke ([#979](https://github.com/googleapis/genai-toolbox/issues/979)) ([ccc3498](https://github.com/googleapis/genai-toolbox/commit/ccc3498cf0a4c43eb909e3850b9e6f582cd48f2a)), closes [#840](https://github.com/googleapis/genai-toolbox/issues/840)

## [0.9.0](https://github.com/googleapis/genai-toolbox/compare/v0.8.0...v0.9.0) (2025-07-11)


### Features

* Dynamic reloading for toolbox config ([#800](https://github.com/googleapis/genai-toolbox/issues/800)) ([4c240ac](https://github.com/googleapis/genai-toolbox/commit/4c240ac3c961cd14738c998ba2d10d5235ef523e))
* **sources/mysql:** Add queryTimeout support to MySQL source ([#830](https://github.com/googleapis/genai-toolbox/issues/830)) ([391cb5b](https://github.com/googleapis/genai-toolbox/commit/391cb5bfe845e554411240a1d9838df5331b25fa))
* **tools/bigquery:** Add optional projectID parameter to bigquery tools ([#799](https://github.com/googleapis/genai-toolbox/issues/799)) ([c6ab74c](https://github.com/googleapis/genai-toolbox/commit/c6ab74c5dad53a0e7885a18438ab3be36b9b7cb3))


### Bug Fixes

* Cleanup unassigned err log ([#857](https://github.com/googleapis/genai-toolbox/issues/857)) ([c081ace](https://github.com/googleapis/genai-toolbox/commit/c081ace46bb24cb3fd2adb21d519489be0d3f3c3))
* Fix docs preview deployment pipeline ([#787](https://github.com/googleapis/genai-toolbox/issues/787)) ([0a93b04](https://github.com/googleapis/genai-toolbox/commit/0a93b0482c8d3c64b324e67408d408f5576ecaf3))
* **tools:** Nil parameter error when arrays are used ([#801](https://github.com/googleapis/genai-toolbox/issues/801)) ([2bdcc08](https://github.com/googleapis/genai-toolbox/commit/2bdcc0841ab37d18e2f0d6fe63fb6f10da3e302b))
* Trigger reload on additional fsnotify operations ([#854](https://github.com/googleapis/genai-toolbox/issues/854)) ([aa8dbec](https://github.com/googleapis/genai-toolbox/commit/aa8dbec97095cf0d7ac771c8084a84e2d3d8ce4e))

## [0.8.0](https://github.com/googleapis/genai-toolbox/compare/v0.7.0...v0.8.0) (2025-07-02)


### ⚠ BREAKING CHANGES

* **postgres,mssql,cloudsqlmssql:** encode source connection url for  sources ([#727](https://github.com/googleapis/genai-toolbox/issues/727))

### Features

* Add support for multiple YAML configuration files ([#760](https://github.com/googleapis/genai-toolbox/issues/760)) ([40679d7](https://github.com/googleapis/genai-toolbox/commit/40679d700eded50d19569923e2a71c51e907a8bf))
* Add support for optional parameters ([#617](https://github.com/googleapis/genai-toolbox/issues/617)) ([4827771](https://github.com/googleapis/genai-toolbox/commit/4827771b78dee9a1284a898b749509b472061527)), closes [#475](https://github.com/googleapis/genai-toolbox/issues/475)
* **mcp:** Support MCP version 2025-03-26 ([#755](https://github.com/googleapis/genai-toolbox/issues/755)) ([474df57](https://github.com/googleapis/genai-toolbox/commit/474df57d62de683079f8d12c31db53396a545fd1))
* **sources/http:** Support disable SSL verification for HTTP Source ([#674](https://github.com/googleapis/genai-toolbox/issues/674)) ([4055b0c](https://github.com/googleapis/genai-toolbox/commit/4055b0c3569c527560d7ad34262963b3dd4e282d))
* **tools/bigquery:** Add templateParameters field for bigquery ([#699](https://github.com/googleapis/genai-toolbox/issues/699)) ([f5f771b](https://github.com/googleapis/genai-toolbox/commit/f5f771b0f3d159630ff602ff55c6c66b61981446))
* **tools/bigtable:** Add templateParameters field for bigtable ([#692](https://github.com/googleapis/genai-toolbox/issues/692)) ([1c06771](https://github.com/googleapis/genai-toolbox/commit/1c067715fac06479eb0060d7067b73dba099ed92))
* **tools/couchbase:** Add templateParameters field for couchbase ([#723](https://github.com/googleapis/genai-toolbox/issues/723)) ([9197186](https://github.com/googleapis/genai-toolbox/commit/9197186b8bea1ac4ec1b39c9c5c110807c8b2ba9))
* **tools/http:** Add support for HTTP Tool pathParams ([#726](https://github.com/googleapis/genai-toolbox/issues/726)) ([fd300dc](https://github.com/googleapis/genai-toolbox/commit/fd300dc606d88bf9f7bba689e2cee4e3565537dd))
* **tools/redis:** Add Redis Source and Tool ([#519](https://github.com/googleapis/genai-toolbox/issues/519)) ([f0aef29](https://github.com/googleapis/genai-toolbox/commit/f0aef29b0c2563e2a00277fbe2784f39f16d2835))
* **tools/spanner:** Add templateParameters field for spanner ([#691](https://github.com/googleapis/genai-toolbox/issues/691)) ([075dfa4](https://github.com/googleapis/genai-toolbox/commit/075dfa47e1fd92be4847bd0aec63296146b66455))
* **tools/sqlitesql:** Add templateParameters field for sqlitesql ([#687](https://github.com/googleapis/genai-toolbox/issues/687)) ([75e254c](https://github.com/googleapis/genai-toolbox/commit/75e254c0a4ce690ca5fa4d1741550ce54734b226))
* **tools/valkey:** Add Valkey Source and Tool ([#532](https://github.com/googleapis/genai-toolbox/issues/532)) ([054ec19](https://github.com/googleapis/genai-toolbox/commit/054ec198b97ba9f36f67dd12b2eff0cc6bc4d080))


### Bug Fixes

* **bigquery,mssql:** Fix panic on tools with array param ([#722](https://github.com/googleapis/genai-toolbox/issues/722)) ([7a6644c](https://github.com/googleapis/genai-toolbox/commit/7a6644cf0c5413e5c803955c88a2cfd0a2233ed3))
* **postgres,mssql,cloudsqlmssql:** Encode source connection url for  sources ([#727](https://github.com/googleapis/genai-toolbox/issues/727)) ([67964d9](https://github.com/googleapis/genai-toolbox/commit/67964d939f27320b63b5759f4b3f3fdaa0c76fbf)), closes [#717](https://github.com/googleapis/genai-toolbox/issues/717)
* Set default value to field's type during unmarshalling ([#774](https://github.com/googleapis/genai-toolbox/issues/774)) ([fafed24](https://github.com/googleapis/genai-toolbox/commit/fafed2485839cf1acc1350e8a24103d2e6356ee0)), closes [#771](https://github.com/googleapis/genai-toolbox/issues/771)
* **server/mcp:** Do not listen from port for stdio ([#719](https://github.com/googleapis/genai-toolbox/issues/719)) ([d51dbc7](https://github.com/googleapis/genai-toolbox/commit/d51dbc759ba493021d3ec6f5417fc04c21f7044f)), closes [#711](https://github.com/googleapis/genai-toolbox/issues/711)
* **tools/mysqlexecutesql:** Handle nil panic and connection leak in Invoke ([#757](https://github.com/googleapis/genai-toolbox/issues/757)) ([7badba4](https://github.com/googleapis/genai-toolbox/commit/7badba42eefb34252be77b852a57d6bd78dd267d))
* **tools/mysqlsql:** Handle nil panic and connection leak in invoke ([#758](https://github.com/googleapis/genai-toolbox/issues/758)) ([cbb4a33](https://github.com/googleapis/genai-toolbox/commit/cbb4a333517313744800d148840312e56340f3fd))

## [0.7.0](https://github.com/googleapis/genai-toolbox/compare/v0.6.0...v0.7.0) (2025-06-10)


### Features

* Add templateParameters field for mssqlsql ([#671](https://github.com/googleapis/genai-toolbox/issues/671)) ([b81fc6a](https://github.com/googleapis/genai-toolbox/commit/b81fc6aa6ccdfbc15676fee4d87041d9ad9682fa))
* Add templateParameters field for mysqlsql ([#663](https://github.com/googleapis/genai-toolbox/issues/663)) ([0a08d2c](https://github.com/googleapis/genai-toolbox/commit/0a08d2c15dcbec18bb556f4dc49792ba0c69db46))
* **metrics:** Add user agent for prebuilt tools ([#669](https://github.com/googleapis/genai-toolbox/issues/669)) ([29aa0a7](https://github.com/googleapis/genai-toolbox/commit/29aa0a70da3c2eb409a38993b3782da8bec7cb85))
* **tools/postgressql:** Add templateParameters field ([#615](https://github.com/googleapis/genai-toolbox/issues/615)) ([b763469](https://github.com/googleapis/genai-toolbox/commit/b76346993f298b4f7493a51405d0a287bacce05f))


### Bug Fixes

* Improve versionString ([#658](https://github.com/googleapis/genai-toolbox/issues/658)) ([cf96f4c](https://github.com/googleapis/genai-toolbox/commit/cf96f4c249f0692e3eb19fc56c794ca6a3079307))
* **server/stdio:** Notifications should not return a response ([#638](https://github.com/googleapis/genai-toolbox/issues/638)) ([69d047a](https://github.com/googleapis/genai-toolbox/commit/69d047af46f1ec00f236db8a978a7a7627217fd2))
* **tools/mysqlsql:** Handled the null value for string case in mysqlsql tools ([#641](https://github.com/googleapis/genai-toolbox/issues/641)) ([ef94648](https://github.com/googleapis/genai-toolbox/commit/ef94648455c3b20adda4f8cff47e70ddccac8c06))
* Update path library ([#678](https://github.com/googleapis/genai-toolbox/issues/678)) ([4998f82](https://github.com/googleapis/genai-toolbox/commit/4998f8285287b5daddd0043540f2cf871e256db5)), closes [#662](https://github.com/googleapis/genai-toolbox/issues/662)

## [0.6.0](https://github.com/googleapis/genai-toolbox/compare/v0.5.0...v0.6.0) (2025-05-28)


### Features

* Add Execute sql tool for SQL Server(MSSQL) ([#585](https://github.com/googleapis/genai-toolbox/issues/585)) ([6083a22](https://github.com/googleapis/genai-toolbox/commit/6083a224aa650caf4e132b4a704323c5f18c4986))
* Add mysql-execute-sql tool ([#577](https://github.com/googleapis/genai-toolbox/issues/577)) ([8590061](https://github.com/googleapis/genai-toolbox/commit/8590061ae4908da0e4b1bd6f7cf7ee8d972fa5ba))
* Add new BigQuery tools: execute_sql, list_datatset_ids, list_table_ids, get_dataset_info, get_table_info ([0fd88b5](https://github.com/googleapis/genai-toolbox/commit/0fd88b574b4ab0d3bee4585999b814675d3b74ed))
* Add spanner-execute-sql tool ([#576](https://github.com/googleapis/genai-toolbox/issues/576)) ([d65747a](https://github.com/googleapis/genai-toolbox/commit/d65747a2dcf3022f22c86a1524ee28c8229f7c20))
* Add support for read-only in Spanner tool ([#563](https://github.com/googleapis/genai-toolbox/issues/563)) ([6512704](https://github.com/googleapis/genai-toolbox/commit/6512704e77088d92fea53a85c6e6cbf4b99c988d))
* Adding support for the --prebuilt flag ([#604](https://github.com/googleapis/genai-toolbox/issues/604)) ([a29c800](https://github.com/googleapis/genai-toolbox/commit/a29c80012eec4729187c12968b53051d20b263a7))
* Support MCP stdio transport protocol ([#607](https://github.com/googleapis/genai-toolbox/issues/607)) ([1702ce1](https://github.com/googleapis/genai-toolbox/commit/1702ce1e00a52170a4271ac999caf534ba00196f))


### Bug Fixes

* Explicitly set query location for BigQuery queries ([#586](https://github.com/googleapis/genai-toolbox/issues/586)) ([eb52b66](https://github.com/googleapis/genai-toolbox/commit/eb52b66d82aaa11be6b1489335f49cba8168099b))
* Fix spellings in comments ([#561](https://github.com/googleapis/genai-toolbox/issues/561)) ([b58bf76](https://github.com/googleapis/genai-toolbox/commit/b58bf76ddaba407e3fd995dfe86d00a09484e14a))
* Prevent tool calls through MCP when auth is required ([#544](https://github.com/googleapis/genai-toolbox/issues/544)) ([e747b6e](https://github.com/googleapis/genai-toolbox/commit/e747b6e289730c17f68be8dec0c6fa6021bb23bd))
* Reinitialize required slice if nil ([#571](https://github.com/googleapis/genai-toolbox/issues/571)) ([04dcf47](https://github.com/googleapis/genai-toolbox/commit/04dcf4791272e1dd034b9a03664dd8dbe77fdddd)), closes [#564](https://github.com/googleapis/genai-toolbox/issues/564)

## [0.5.0](https://github.com/googleapis/genai-toolbox/compare/v0.4.0...v0.5.0) (2025-05-06)


### Features

* Add Couchbase as Source and Tool ([#307](https://github.com/googleapis/genai-toolbox/issues/307)) ([d7390b0](https://github.com/googleapis/genai-toolbox/commit/d7390b06b7bcb15411388e9a4dbcfe75afcca1ee))
* Add postgres-execute-sql tool ([#490](https://github.com/googleapis/genai-toolbox/issues/490)) ([11ea7bc](https://github.com/googleapis/genai-toolbox/commit/11ea7bc584aa4ca8e8b0e7a355f6666ccbea2883))


## [0.4.0](https://github.com/googleapis/genai-toolbox/compare/v0.3.0...v0.4.0) (2025-04-23)


### Features

* Add `AuthRequired` to Neo4j & Dgraph Tools ([#434](https://github.com/googleapis/genai-toolbox/issues/434)) ([afbf4b2](https://github.com/googleapis/genai-toolbox/commit/afbf4b2daeb01119a22ce18469bffb9e9f57d2f8))
* Add `AuthRequired` to tool manifest ([#433](https://github.com/googleapis/genai-toolbox/issues/433)) ([d9388ad](https://github.com/googleapis/genai-toolbox/commit/d9388ad57e832570aab56b9b357c1fb0ba994852))
* Add BigQuery source and tool ([#463](https://github.com/googleapis/genai-toolbox/issues/463)) ([8055aa5](https://github.com/googleapis/genai-toolbox/commit/8055aa519fe6e7993ba524f8f7e684fbfdecc1b9))
* Add Bigtable source and tool ([#418](https://github.com/googleapis/genai-toolbox/issues/418)) ([ae53b8e](https://github.com/googleapis/genai-toolbox/commit/ae53b8eeff9d0e9ec14d9c6d4286c856cc8f1811))
* Add IAM AuthN to AlloyDB Source ([#399](https://github.com/googleapis/genai-toolbox/issues/399)) ([e8ed447](https://github.com/googleapis/genai-toolbox/commit/e8ed447d9153c60a1d6321285587e6e4ca930f87))
* Add IAM AuthN to Cloud SQL Sources ([#414](https://github.com/googleapis/genai-toolbox/issues/414)) ([be85b82](https://github.com/googleapis/genai-toolbox/commit/be85b820785dbce79133b0cf8788bde75ff25fee))
* Add toolset feature to mcp ([#425](https://github.com/googleapis/genai-toolbox/issues/425)) ([e307857](https://github.com/googleapis/genai-toolbox/commit/e307857085ac4c8c2ee8292c914daa5534ba74bf)), closes [#403](https://github.com/googleapis/genai-toolbox/issues/403)
* Add SQLite source and tool ([#438](https://github.com/googleapis/genai-toolbox/issues/438)) ([fc14cbf](https://github.com/googleapis/genai-toolbox/commit/fc14cbfd078d465591e4fefb80542759e82a2731))
* Support env replacement for tools.yaml ([#462](https://github.com/googleapis/genai-toolbox/issues/462)) ([eadb678](https://github.com/googleapis/genai-toolbox/commit/eadb678a7bd4ce74a3b1160f5ed8966ffbb13c61))


### Bug Fixes

* [#419](https://github.com/googleapis/genai-toolbox/issues/419) TLS https URL for SSE endpoint ([#420](https://github.com/googleapis/genai-toolbox/issues/420)) ([0a7d3ff](https://github.com/googleapis/genai-toolbox/commit/0a7d3ff06b88051c752b6d53bc964ed6e6be400e))
* **docs:** Fix link 'Edit this page' ([#454](https://github.com/googleapis/genai-toolbox/issues/454)) ([969065e](https://github.com/googleapis/genai-toolbox/commit/969065e561f28ddb9755d99bbe0b288040198296)), closes [#427](https://github.com/googleapis/genai-toolbox/issues/427)
* Update http error code from invocation ([#468](https://github.com/googleapis/genai-toolbox/issues/468)) ([ff7c0ff](https://github.com/googleapis/genai-toolbox/commit/ff7c0ffc65172a335e8d3321e5a6b92d38dc7e6d)), closes [#465](https://github.com/googleapis/genai-toolbox/issues/465)

## [0.3.0](https://github.com/googleapis/genai-toolbox/compare/v0.2.1...v0.3.0) (2025-04-04)


### Features

* Add 'alloydb-ai-nl' tool ([#358](https://github.com/googleapis/genai-toolbox/issues/358)) ([f02885f](https://github.com/googleapis/genai-toolbox/commit/f02885fd4a919103fdabaa4ca38d975dc8497542))
* Add HTTP Source and Tool ([#332](https://github.com/googleapis/genai-toolbox/issues/332)) ([64da5b4](https://github.com/googleapis/genai-toolbox/commit/64da5b4efe7d948ceb366c37fdaabd42405bc932))
* Adding support for Model Context Protocol (MCP). ([#396](https://github.com/googleapis/genai-toolbox/issues/396)) ([a7d1d4e](https://github.com/googleapis/genai-toolbox/commit/a7d1d4eb2ae337b463d1b25ccb25c3c0eb30df6f))
* Added [toolbox-core](https://pypi.org/project/toolbox-core/) SDK – easily integrate Toolbox into any Python function calling framework


### Bug Fixes

* Add `tools-file` flag and deprecate `tools_file`  ([#384](https://github.com/googleapis/genai-toolbox/issues/384)) ([34a7263](https://github.com/googleapis/genai-toolbox/commit/34a7263fdce40715de20ef5677f94be29f9f5c98)), closes [#383](https://github.com/googleapis/genai-toolbox/issues/383)

## [0.2.1](https://github.com/googleapis/genai-toolbox/compare/v0.2.0...v0.2.1) (2025-03-20)


### Bug Fixes

* Fix variable name in quickstart ([#336](https://github.com/googleapis/genai-toolbox/issues/336)) ([5400127](https://github.com/googleapis/genai-toolbox/commit/54001278878042aff75ed421b9fbe70008e9dd4d))
* **source/alloydb:** Correct user agents not being sent ([#323](https://github.com/googleapis/genai-toolbox/issues/323)) ([ce12a34](https://github.com/googleapis/genai-toolbox/commit/ce12a344ed6290c7c6e36ee117318c20d6fdccc2))

## [0.2.0](https://github.com/googleapis/genai-toolbox/compare/v0.1.0...v0.2.0) (2025-03-03)


### ⚠ BREAKING CHANGES

* Rename "AuthSource" in favor of "AuthService" ([#297](https://github.com/googleapis/genai-toolbox/issues/297))

### Features

* Rename "AuthSource" in favor of "AuthService" ([#297](https://github.com/googleapis/genai-toolbox/issues/297)) ([04cb5fb](https://github.com/googleapis/genai-toolbox/commit/04cb5fbc3e1876d1cf83d3f3de2c176ee2862d63))


### Bug Fixes

* Add items to parameter manifest ([#293](https://github.com/googleapis/genai-toolbox/issues/293)) ([541612d](https://github.com/googleapis/genai-toolbox/commit/541612d72d0123b285bb9f58c9cf1bfd61ebd902))
* **source/cloud-sql:** Correct user agents not being sent ([#306](https://github.com/googleapis/genai-toolbox/issues/306)) ([584c8ae](https://github.com/googleapis/genai-toolbox/commit/584c8aea438eeb991935b4347c2c3b2cb7144cbf))
* Throw error when items field is missing from array parameter ([#296](https://github.com/googleapis/genai-toolbox/issues/296)) ([9193836](https://github.com/googleapis/genai-toolbox/commit/9193836effaae79204f73a8c5d26668a95d2cb91))
* Validate required common fields for parameters ([#298](https://github.com/googleapis/genai-toolbox/issues/298)) ([e494d11](https://github.com/googleapis/genai-toolbox/commit/e494d11e6e1651138dcd527171f63d4fa8604211))


### Miscellaneous Chores

* Release 0.2.0 ([#314](https://github.com/googleapis/genai-toolbox/issues/314)) ([d7ccf73](https://github.com/googleapis/genai-toolbox/commit/d7ccf730e7c0c752615f8a7ea162836c5f9950da))

## [0.1.0](https://github.com/googleapis/genai-toolbox/compare/v0.0.5...v0.1.0) (2025-02-06)


### ⚠ BREAKING CHANGES

* **langchain-sdk:** The SDK for `toolbox-langchain` is now located [here](https://github.com/googleapis/genai-toolbox-langchain-python).

### Features

* Add Cloud SQL for SQL Server Source and Tool ([#223](https://github.com/googleapis/genai-toolbox/issues/223)) ([9bad952](https://github.com/googleapis/genai-toolbox/commit/9bad9520604aa363a6d73f5ce14686895c2f4333))
* Add Cloud SQL for MySQL Source and Tool ([#221](https://github.com/googleapis/genai-toolbox/issues/221)) ([f1f61d7](https://github.com/googleapis/genai-toolbox/commit/f1f61d70877a1c7cc9080f6d70112bd0c0533473))
* Add Dgraph Source and Tool ([#233](https://github.com/googleapis/genai-toolbox/issues/233)) ([617cc87](https://github.com/googleapis/genai-toolbox/commit/617cc872d1d692138a712d39fb7c1a405e9c1876))
* Add local quickstart ([#232](https://github.com/googleapis/genai-toolbox/issues/232)) ([497fb06](https://github.com/googleapis/genai-toolbox/commit/497fb06fae6d04adaad11fa78eb04282d0225dbd))
* Add user agents for cloud sources ([#244](https://github.com/googleapis/genai-toolbox/issues/244)) ([8452f8e](https://github.com/googleapis/genai-toolbox/commit/8452f8eb4457dcb0e360a9d9ae5b6e14e78806b1))
* Add MySQL Source ([#250](https://github.com/googleapis/genai-toolbox/issues/250)) ([378692a](https://github.com/googleapis/genai-toolbox/commit/378692ab50a90dcc1c3353052d0741cfd318c79d))
* Add MSSQL source ([#255](https://github.com/googleapis/genai-toolbox/issues/255)) ([8fca0a9](https://github.com/googleapis/genai-toolbox/commit/8fca0a95ee5e79e30919b05592af643ba57f3183))


### Bug Fixes

* Auth token verification failure should not throw error immediately ([#234](https://github.com/googleapis/genai-toolbox/issues/234)) ([4639cc6](https://github.com/googleapis/genai-toolbox/commit/4639cc6560f09b6b8203650ccce424ce59aa0c14))
* Fix typo in postgres test ([#216](https://github.com/googleapis/genai-toolbox/issues/216)) ([0c3d12a](https://github.com/googleapis/genai-toolbox/commit/0c3d12ae04a752fddcff06e92967910cdd643bbf))
* **mssql:** Fix mssql tool kind to mssql-sql ([#249](https://github.com/googleapis/genai-toolbox/issues/249)) ([1357be2](https://github.com/googleapis/genai-toolbox/commit/1357be2569b5f8d31b2b72fa83749fa8519fc8bd))
* **mysql:** Fix mysql tool kind to mysql-sql ([#248](https://github.com/googleapis/genai-toolbox/issues/248)) ([669d6b7](https://github.com/googleapis/genai-toolbox/commit/669d6b7239c36f612f02948716cf167c5a2eaa10))
* Schema float type ([#264](https://github.com/googleapis/genai-toolbox/issues/264)) ([1702f74](https://github.com/googleapis/genai-toolbox/commit/1702f74e9937eb4539c38c7152fe474870e61591))
* Typos at test cases ([#265](https://github.com/googleapis/genai-toolbox/issues/265)) ([b7c5661](https://github.com/googleapis/genai-toolbox/commit/b7c5661215c431c8590a60e029f3c340132574b7))
* Update README and quickstart with the correct async APIs. ([#269](https://github.com/googleapis/genai-toolbox/issues/269)) ([21eef2e](https://github.com/googleapis/genai-toolbox/commit/21eef2e198683d2f7fd0e606a4410b4f3a51686e))
* Update tool invoke to return json ([#266](https://github.com/googleapis/genai-toolbox/issues/266)) ([ad58cd5](https://github.com/googleapis/genai-toolbox/commit/ad58cd5855be9e1b73926e16527fb89ce778b8d9))

## [0.0.5](https://github.com/googleapis/genai-toolbox/compare/v0.0.4...v0.0.5) (2025-01-14)


### ⚠ BREAKING CHANGES

* replace Source field `ip_type` with `ipType` for consistency ([#197](https://github.com/googleapis/genai-toolbox/issues/197))
* **toolbox-sdk:** deprecate 'add_auth_headers' in favor of 'add_auth_tokens'  ([#170](https://github.com/googleapis/genai-toolbox/issues/170))

### Features

* Add support for OpenTelemetry ([#205](https://github.com/googleapis/genai-toolbox/issues/205)) ([1fcc20a](https://github.com/googleapis/genai-toolbox/commit/1fcc20a8469794ed8e6846cded44196d26c306be))
* Added Neo4j Source and Tool ([#189](https://github.com/googleapis/genai-toolbox/issues/189)) ([8a1224b](https://github.com/googleapis/genai-toolbox/commit/8a1224b9e0145c4e214d42f14f5308b508ea27ce))
* **llamaindex-sdk:** Implement OAuth support for LlamaIndex. ([#159](https://github.com/googleapis/genai-toolbox/issues/159)) ([003ce51](https://github.com/googleapis/genai-toolbox/commit/003ce510a1fb37a23e4c64fdf21376e0e32ec8ab))
* Replace Source field `ip_type` with `ipType` for consistency ([#197](https://github.com/googleapis/genai-toolbox/issues/197)) ([e069520](https://github.com/googleapis/genai-toolbox/commit/e069520bb79d086dbdd37ebc3ad9bb39b31c8fac))
* Update log with given context ([#147](https://github.com/googleapis/genai-toolbox/issues/147)) ([809e547](https://github.com/googleapis/genai-toolbox/commit/809e547a481bd4af351bbaa2dcfd203b086bb51d))


### Bug Fixes

* Correct parsing of floats/ints from json ([#180](https://github.com/googleapis/genai-toolbox/issues/180)) ([387a5b5](https://github.com/googleapis/genai-toolbox/commit/387a5b56b53ccfe0637a0f44c0ddbec8e991cc39))
* **doc:** Update example `clientId` field ([#198](https://github.com/googleapis/genai-toolbox/issues/198)) ([0c86e89](https://github.com/googleapis/genai-toolbox/commit/0c86e895066ee3dee9ab9bc20fe00934066b67ac))
* Fix config name in auth doc samples ([#186](https://github.com/googleapis/genai-toolbox/issues/186)) ([bb03457](https://github.com/googleapis/genai-toolbox/commit/bb0345767e0550fcda975958f450086e44f6a913))
* Handle shutdown gracefully ([#178](https://github.com/googleapis/genai-toolbox/issues/178)) ([66ab70f](https://github.com/googleapis/genai-toolbox/commit/66ab70f702d7178c61c8d90399483b6125ba01c8))
* Improve return error for parameters  ([#206](https://github.com/googleapis/genai-toolbox/issues/206)) ([346c57d](https://github.com/googleapis/genai-toolbox/commit/346c57da2394e398ee8cc527b84973aa2bcde642))
* **toolbox-sdk:** Deprecate 'add_auth_headers' in favor of 'add_auth_tokens'  ([#170](https://github.com/googleapis/genai-toolbox/issues/170)) ([b56fa68](https://github.com/googleapis/genai-toolbox/commit/b56fa685e379c3515025ed76d9abe61f93365a65))


### Miscellaneous Chores

* Release 0.0.5 ([#210](https://github.com/googleapis/genai-toolbox/issues/210)) ([bd407c0](https://github.com/googleapis/genai-toolbox/commit/bd407c0ab749c9a72523122a2212652f9d97ab03))

## [0.0.4](https://github.com/googleapis/genai-toolbox/compare/v0.0.3...v0.0.4) (2024-12-18)


### Features

* Add `auth_required` to tools ([#123](https://github.com/googleapis/genai-toolbox/issues/123)) ([3118104](https://github.com/googleapis/genai-toolbox/commit/3118104ae17335db073911a88f2ea8ce8d0bfb45))
* Add Auth Source configuration ([#71](https://github.com/googleapis/genai-toolbox/issues/71)) ([77b0d43](https://github.com/googleapis/genai-toolbox/commit/77b0d4317580214c1c9bd542b24371f09fd17fe0))
* Add Tool authenticated parameters ([#80](https://github.com/googleapis/genai-toolbox/issues/80)) ([380a6fb](https://github.com/googleapis/genai-toolbox/commit/380a6fbbd5a5abc3159c96421b0923c117807267))
* **langchain-sdk:** Correctly parse Manifest API response as JSON ([#143](https://github.com/googleapis/genai-toolbox/issues/143)) ([2c8633c](https://github.com/googleapis/genai-toolbox/commit/2c8633c3eb2d936b62fe24c87a6385d5898f4370))
* **langchain-sdk:** Support authentication in LangChain Toolbox SDK. ([#133](https://github.com/googleapis/genai-toolbox/issues/133)) ([23fa912](https://github.com/googleapis/genai-toolbox/commit/23fa912a80e7e02f53a5ad27781e32a5cfa05458))


### Bug Fixes

* Fix release image version tag ([#136](https://github.com/googleapis/genai-toolbox/issues/136)) ([6d19ff9](https://github.com/googleapis/genai-toolbox/commit/6d19ff96e4004c97739ad6a064ef72e57f8da2f2))
* **langchain-sdk:** Correct test name to ensure execution and full coverage. ([#145](https://github.com/googleapis/genai-toolbox/issues/145)) ([d820ac3](https://github.com/googleapis/genai-toolbox/commit/d820ac3767127058dc726b44e469a7adec26783b))
* Set server version ([#150](https://github.com/googleapis/genai-toolbox/issues/150)) ([abd1eb7](https://github.com/googleapis/genai-toolbox/commit/abd1eb702c1ab75d76be624d2f0decd34548f93f))


### Miscellaneous Chores

* Release 0.0.4 ([#152](https://github.com/googleapis/genai-toolbox/issues/152)) ([86ec12f](https://github.com/googleapis/genai-toolbox/commit/86ec12f8c5d67ced5bcd52c9d8e80b17aa11b514))

## [0.0.3](https://github.com/googleapis/genai-toolbox/compare/v0.0.2...v0.0.3) (2024-12-10)


### Features

* Add --log-level and --logging-format flags ([#97](https://github.com/googleapis/genai-toolbox/issues/97)) ([9a0f618](https://github.com/googleapis/genai-toolbox/commit/9a0f618efca13e0accb2656ea74a393e8cda5d40))
* Add options for command ([#110](https://github.com/googleapis/genai-toolbox/issues/110)) ([5c690c5](https://github.com/googleapis/genai-toolbox/commit/5c690c5c30515ae790b045677ef518106c52a491))
* Add Spanner source and tool ([#90](https://github.com/googleapis/genai-toolbox/issues/90)) ([890914a](https://github.com/googleapis/genai-toolbox/commit/890914aae0989d181b26efa940326a5c2f559959))
* Add std logger ([#95](https://github.com/googleapis/genai-toolbox/issues/95)) ([6a8feb5](https://github.com/googleapis/genai-toolbox/commit/6a8feb51f0d148607f52c4a5c755faa9e3b7e6a4))
* Add structured logger ([#96](https://github.com/googleapis/genai-toolbox/issues/96)) ([5e20417](https://github.com/googleapis/genai-toolbox/commit/5e2041755163932c6c3135fad2404cffd22cb463))
* **source/alloydb-pg:** Add configuration for public and private IP ([#103](https://github.com/googleapis/genai-toolbox/issues/103)) ([e88ec40](https://github.com/googleapis/genai-toolbox/commit/e88ec409d14c85d6b0896c45d9957cce9097912a))
* **source/cloudsql-pg:** Add configuration for public and private IP ([#114](https://github.com/googleapis/genai-toolbox/issues/114)) ([6479c1d](https://github.com/googleapis/genai-toolbox/commit/6479c1dbe26f05438df9c2289118da558eee0a0d))


### Bug Fixes

* Fix go test workflow ([#84](https://github.com/googleapis/genai-toolbox/issues/84)) ([8c2c373](https://github.com/googleapis/genai-toolbox/commit/8c2c373d359b718b2182f566bc245a2a8fa03333))
* Fix issue causing client session to not close properly while closing SDK. ([#81](https://github.com/googleapis/genai-toolbox/issues/81)) ([9d360e1](https://github.com/googleapis/genai-toolbox/commit/9d360e16eab664992bca9d6b01dbec12c9d5d2e1))
* Fix test cases for ip_type ([#115](https://github.com/googleapis/genai-toolbox/issues/115)) ([5528bec](https://github.com/googleapis/genai-toolbox/commit/5528bec8ed8c7efa03979abedc98102bff4abed8))
* Fix the errors showing up after setting up mypy type checker. ([#74](https://github.com/googleapis/genai-toolbox/issues/74)) ([522bbef](https://github.com/googleapis/genai-toolbox/commit/522bbefa7b305a1695bb21ce4a9c92429cde4ee9))
* **llamaindex-sdk:** Fix issue causing client session to not close properly while closing SDK. ([#82](https://github.com/googleapis/genai-toolbox/issues/82)) ([fa03376](https://github.com/googleapis/genai-toolbox/commit/fa03376bbc4b9dba93a471b13225c8f1a37187c2))


### Miscellaneous Chores

* Release 0.0.3 ([#122](https://github.com/googleapis/genai-toolbox/issues/122)) ([626e12f](https://github.com/googleapis/genai-toolbox/commit/626e12fdb3e27996e9e4a8c9661563ec3c3bcc5c))

## [0.0.2](https://github.com/googleapis/genai-toolbox/compare/v0.0.1...v0.0.2) (2024-11-12)


### ⚠ BREAKING CHANGES

* consolidate "x-postgres-generic" tools to "postgres-sql" tool ([#43](https://github.com/googleapis/genai-toolbox/issues/43))

### Features

* Consolidate "x-postgres-generic" tools to "postgres-sql" tool ([#43](https://github.com/googleapis/genai-toolbox/issues/43)) ([f630965](https://github.com/googleapis/genai-toolbox/commit/f6309659374bc9cb500cc54dd4220baa0a451a3b))
* **container:** Add entrypoint in Dockerfile ([#38](https://github.com/googleapis/genai-toolbox/issues/38)) ([b08072a](https://github.com/googleapis/genai-toolbox/commit/b08072a80034a34a394dea82838422bd6cb0d23a))
* **sdk:** Added LlamaIndex SDK ([#48](https://github.com/googleapis/genai-toolbox/issues/48)) ([b824abe](https://github.com/googleapis/genai-toolbox/commit/b824abe72fbf518ec91fb12e5270c0a19e776d2f))
* **sdk:** Make ClientSession optional when initializing ToolboxClient ([#55](https://github.com/googleapis/genai-toolbox/issues/55)) ([26347b5](https://github.com/googleapis/genai-toolbox/commit/26347b5a5e71434d7bd2b7a9e6458247e75e3969))
* Support requesting a single tool ([#56](https://github.com/googleapis/genai-toolbox/issues/56)) ([efafba9](https://github.com/googleapis/genai-toolbox/commit/efafba9033e046905552f149f59893a4fad41afb))


### Bug Fixes

* Correct source type validation for postgres-sql tool ([#47](https://github.com/googleapis/genai-toolbox/issues/47)) ([52ebb43](https://github.com/googleapis/genai-toolbox/commit/52ebb431b784d160508273492d904d3b101afeb9))
* **docs:** Correct outdated references to tool kinds ([#49](https://github.com/googleapis/genai-toolbox/issues/49)) ([972888b](https://github.com/googleapis/genai-toolbox/commit/972888b9d64e1fea1d9a56b13268235ea55b9d66))
* Handle content-type correctly ([#33](https://github.com/googleapis/genai-toolbox/issues/33)) ([cf8112f](https://github.com/googleapis/genai-toolbox/commit/cf8112f85610833f2f4f2817a65fc4f7cf2322d8))


### Miscellaneous Chores

* Release 0.0.2 ([#65](https://github.com/googleapis/genai-toolbox/issues/65)) ([beea3c3](https://github.com/googleapis/genai-toolbox/commit/beea3c32d94d605973ba06b71a37b7c1bd4787bf))

## 0.0.1 (2024-10-28)


### Features

* Add address and port flags ([#7](https://github.com/googleapis/genai-toolbox/issues/7)) ([df9ad9e](https://github.com/googleapis/genai-toolbox/commit/df9ad9e33f99e6e5b692d9a99c2a90fbe3667265))
* Add AlloyDB source and tool ([#23](https://github.com/googleapis/genai-toolbox/issues/23)) ([fe92d02](https://github.com/googleapis/genai-toolbox/commit/fe92d02ae2ac2e70769dd2ee177cab91233a01cd))
* Add basic CLI ([#5](https://github.com/googleapis/genai-toolbox/issues/5)) ([1539ee5](https://github.com/googleapis/genai-toolbox/commit/1539ee56dddbee3a19069ef887375e76503fbdbd))
* Add basic http server ([#6](https://github.com/googleapis/genai-toolbox/issues/6)) ([e09ae30](https://github.com/googleapis/genai-toolbox/commit/e09ae30a90083a3777f91dd661e5a85bacdd48ba))
* Add basic parsing from tools file ([#8](https://github.com/googleapis/genai-toolbox/issues/8)) ([b9ba364](https://github.com/googleapis/genai-toolbox/commit/b9ba364fb66a884178d207e57310e07cf8d6cff1))
* Add initial cloud sql pg invocation ([#14](https://github.com/googleapis/genai-toolbox/issues/14)) ([3703176](https://github.com/googleapis/genai-toolbox/commit/3703176fce110ebb999deeb73d6b3aba29dee276))
* Add Postgres source and tool ([#25](https://github.com/googleapis/genai-toolbox/issues/25)) ([2742ed4](https://github.com/googleapis/genai-toolbox/commit/2742ed48b8d52f748a9edbc520068e1b88d82758))
* Add preliminary parsing of parameters ([#13](https://github.com/googleapis/genai-toolbox/issues/13)) ([27edd3b](https://github.com/googleapis/genai-toolbox/commit/27edd3b5f671b2ce7677729fae4e56381271c990))
* Add support for array type parameters ([#26](https://github.com/googleapis/genai-toolbox/issues/26)) ([3903e86](https://github.com/googleapis/genai-toolbox/commit/3903e860bc67a7b385e316220ba4ea37e00c20f2))
* Add toolset configuration ([#12](https://github.com/googleapis/genai-toolbox/issues/12)) ([59b4bc0](https://github.com/googleapis/genai-toolbox/commit/59b4bc07f4b8521c188d10ed047eee817d19e424))
* Add Toolset manifest endpoint ([#11](https://github.com/googleapis/genai-toolbox/issues/11)) ([61e7b78](https://github.com/googleapis/genai-toolbox/commit/61e7b78ad8af2e51f824ced32d14234fa32da30a))
* **langchain-sdk:** Add Toolbox SDK for LangChain ([#22](https://github.com/googleapis/genai-toolbox/issues/22)) ([0bcd4b6](https://github.com/googleapis/genai-toolbox/commit/0bcd4b6e418a8e43f2b7b74a0969da171e2081bf))
* Stub basic control plane functionality  ([#9](https://github.com/googleapis/genai-toolbox/issues/9)) ([336bdc4](https://github.com/googleapis/genai-toolbox/commit/336bdc4d56580637afff2313bef64b50b148faca))


### Miscellaneous Chores

* Release 0.0.1 ([#31](https://github.com/googleapis/genai-toolbox/issues/31)) ([1f24ddd](https://github.com/googleapis/genai-toolbox/commit/1f24dddb4b24ff4336998bf43acaf4607a48ff66))


### Continuous Integration

* Add realease-please ([#15](https://github.com/googleapis/genai-toolbox/issues/15)) ([17fbbb4](https://github.com/googleapis/genai-toolbox/commit/17fbbb49b05996c2c43df4b72cf08488224c522a))
