const spawn = require('child_process').spawnSync


module.exports.runTest = () => { 
    let testProcess = spawn('npm', ['test'])
    return testProcess.status;
};
