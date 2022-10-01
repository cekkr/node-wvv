
var shell = require('./src/shell.js');

// Process settings
process.env.NODE_NO_WARNINGS = true;

// Let's go
console.log('wvv.js bash');

shell.waitCommand();