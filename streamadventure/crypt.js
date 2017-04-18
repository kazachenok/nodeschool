(function() {
  'use strict';
  const crypto = require('crypto');

  var passphrase = process.argv[2];
  var stream = crypto.createDecipher('aes256',passphrase);
  stream.pipe(process.stdout);
  process.stdin.pipe(stream);
}());
