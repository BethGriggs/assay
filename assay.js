const spawnSync = require('child_process').spawnSync;

const library = require('./library.json');

const NODE_VERSION = process.argv[2] || "10.15.2";
const TEST_NODE_VERSION = process.argv[3] || "6.17.0";


for (node_module in library) {
    
    console.log(`Testing ${node_module}@${library[node_module].MODULE_VERSION} with ${NODE_VERSION}`);
    const status = runModuleTest(
        node_module,
        library[node_module].MODULE_VERSION,
        library[node_module].MODULE_REPOSITORY,
        NODE_VERSION
    );

    console.log(`Testing ${node_module}@${library[node_module].MODULE_VERSION} with ${TEST_NODE_VERSION}`);
    const testStatus = runModuleTest(
        node_module,
        library[node_module].MODULE_VERSION,
        library[node_module].MODULE_REPOSITORY,
        TEST_NODE_VERSION
    );
    console.log(`${node_module}@${library[node_module].MODULE_VERSION}`); 
    console.log(`${NODE_VERSION} ${status}`); 
    console.log(`${TEST_NODE_VERSION} ${testStatus}`);
}


function runModuleTest(node_module, module_version, module_repository, node_version) {
    let test = spawnSync('sh', ['test.sh', node_module, module_version, module_repository, node_version]);
    return (test.status ? "FAILED" : "PASSED");
}