(function() {
  'use strict';

  const zlib = require('zlib');
  const tar = require('tar');
  const concat = require('concat-stream');
  const crypto = require('crypto');

  var cipher = process.argv[2];
  var pass = process.argv[3];

  var unziper = zlib.createGunzip();
  var decipher = crypto.createDecipher(cipher, pass);

  var parser = tar.Parse();
  parser.on('entry', function (e) {
    if (e.type !== 'File') return;

    var md5 = crypto.createHash('md5', { encoding: 'hex' });
    e.pipe(md5).pipe(concat(function (buf) {
      console.log(buf + ' ' + e.path);
    }));
  });

  process.stdin
    .pipe(decipher)
    .pipe(unziper)
    .pipe(parser);
}());
