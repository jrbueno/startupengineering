#!usr/bin/env node

var fs = require('fs');
var outfile = "hello.txt";
var out = "Hello World!\n";

fs.writeFileSync(outfile, out);
console.log(__filename);
