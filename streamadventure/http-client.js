(function() {
  'use strict';

  const request = require('request');

  var req = request.post('http://localhost:8099');
  process.stdin.pipe(req).pipe(process.stdout);
}());
