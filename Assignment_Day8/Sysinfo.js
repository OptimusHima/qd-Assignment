//check System information 

const os = require('os');
console.log('Version: ' + os.version());
console.log('HostName: ' + os.hostname());
console.log(os.arch());
const freeMemory = os.freemem();
console.log('FreeMemory: ' + `${freeMemory / 1024 / 1024 / 1024}`);
const totalMemory = os.totalmem();
console.log('TotalMemory: ' + `${totalMemory / 1024 / 1024 / 1024}`);

console.log('Plateform: ' + os.platform());
console.log(os.userInfo());

