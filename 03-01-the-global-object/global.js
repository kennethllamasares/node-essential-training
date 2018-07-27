var path = require('path');
var greeting = 'Hello World!';

console.log(`Welcome, ${greeting}`);
console.log(`Warm regards from ${path.basename(__filename)}`);