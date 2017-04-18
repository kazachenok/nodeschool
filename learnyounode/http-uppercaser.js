const http = require('http');
const map = require('through2-map');

var port = process.argv[2];
var uppercaser = map(function (chunk) {
  return chunk.toString().toUpperCase();
});

var server = http.createServer(function (req, res) {
  if (req.method !== 'POST') {
    return res.end("send me a POST\n")
  }
  res.writeHead(200, {"Content-Type": "text/plain"});
  req.pipe(uppercaser).pipe(res);
});

server.listen(port);
