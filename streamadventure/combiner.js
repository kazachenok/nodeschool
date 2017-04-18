(function() {
  'use strict';

  const combiner = require('stream-combiner')
  const through = require('through2');
  const split = require('split');
  const zlib = require('zlib');

  module.exports = function () {
    var booksByGenre;

    function transform(chunk, enc, cb) {
      if (chunk.length === 0) {
        return cb();
      }

      var line = JSON.parse(chunk);
      if (line.type === 'genre') {
        if (booksByGenre) {
          this.push(JSON.stringify(booksByGenre) + '\n');
        }
        booksByGenre = {
          name: line.name,
          books: []
        }
      } else if (line.type === 'book'){
        booksByGenre.books.push(line.name);
      }
      cb();
    }

    function flush(cb) {
      this.push(JSON.stringify(booksByGenre))
      cb();
    }
    var group = through(transform, flush);

    return combiner(split(), group, zlib.createGzip());
  }
}());
