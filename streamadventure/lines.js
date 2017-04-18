(function() {
  'use strict';

  const through = require('through2');
  const split = require('split');

  var upper = through(write);

  var count = 0;

  function write(chunk, encoding, callback) {
    count += 1;
    var line = chunk.toString();
    var modifiedLine = count % 2 ?
      line.toLowerCase() :
      line.toUpperCase();
    this.push(modifiedLine  + '\n');
    callback();
  }

  process.stdin
    .pipe(split())
    .pipe(upper)
    .pipe(process.stdout);
}());
