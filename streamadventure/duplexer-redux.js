(function() {
  'use strict';

  const duplexer = require('duplexer');
  const through = require('through2')

  module.exports = function (counter) {
    var countries = { }
    var stream = through({ objectMode: true}, function (chunk, enc, callback) {
      countries[chunk.country] = (countries[chunk.country] || 0) + 1;
      callback();
    });

    stream.on('finish', function() { counter.setCounts(countries); });
    return duplexer(stream, counter)
  };
}());
