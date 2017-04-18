(function() {
  'use strict';

  const trumpet = require('trumpet');
  const through = require('through2');

  var upper = through(write);

  function write(chunk, enc, callback) {
    var upped = chunk.toString().toUpperCase();
    this.push(upped)
    callback();
  }

  var tr = trumpet();
  var stream = tr.select('.loud').createStream();
  stream.pipe(upper).pipe(stream);

  process.stdin.pipe(tr).pipe(process.stdout);
}());
