(function() {
  'use strict';

  const through = require('through2');

  var upper = through(write);

  function write(chunk, encoding, callback) {
    var upped = chunk.toString().toUpperCase();
    this.push(upped);
    callback();
  }

  process.stdin.pipe(upper).pipe(process.stdout);
}());
