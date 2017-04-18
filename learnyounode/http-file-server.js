const http = require('http');
const fs = require('fs');

var port = process.argv[2];
var file = process.argv[3];

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  var fileStream = fs.createReadStream(file);
  fileStream.pipe(response);
});

server.listen(port);
