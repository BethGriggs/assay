const spawnSync = require('child_process').spawnSync;
const NODE_VERSION = process.argv[2] || "10.15.3";
const TEST_NODE_VERSION = process.argv[3] || "10.15.2asdasd"; 
const MODULE=process.argv[4] || "express"; 
const MODULE_VERSION=process.argv[5] || "4.16.4";
const MODULE_REPOSITORY=process.argv[6] || "git@github.com:expressjs/express.git";


console.log('Testing Node Version');
console.log(runModuleTest(NODE_VERSION));
console.log('Testing Node Version');
console.log(runModuleTest(TEST_NODE_VERSION));


function runModuleTest(node_version) {
    let test = spawnSync('sh', ['test.sh', MODULE, MODULE_VERSION, MODULE_REPOSITORY, node_version]);
    return test.status;
}