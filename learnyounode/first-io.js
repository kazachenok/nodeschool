var fs = require('fs');
var file = process.argv[2],
  lineCount,
  buffer

if (fs.existsSync(file)) {
  var buffer = fs.readFileSync(file, 'utf8');
  lineCount = buffer.split('\n').length - 1;
}

console.log(lineCount);
