(function() {
  'use strict';

  const http = require('http');
  const through = require('through2');

  var upper = through(write);

  function write(chunk, encoding, callback) {
    var upped = chunk.toString().toUpperCase();
    this.push(upped);
    callback();
  }

  var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
      req.pipe(upper).pipe(res);
    }else {
      res.end('send me a POST\n');
    }
  });

  server.listen(process.argv[2]);

}());
