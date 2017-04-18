(function() {
  'use strict';

  const concat = require('concat-stream');

  process.stdin.pipe(concat(function (buf) {
    console.log(buf.reverse().toString());
  }));
}());
