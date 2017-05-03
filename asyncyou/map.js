(function() {
  'use strict';

  const async = require('async');
  const http = require('http');

  var url1 = process.argv[2]
  var url2 = process.argv[3]

  async.map([url1, url2], function (item, done) {
    var rawData = ''
    http.get(item, function (res) {
      res.on('data', (chunk) => { rawData += chunk })
      res.on('end', () => { return done(null, rawData) })
    }).on('error', (err) => { if (err) done(err) })
  }, function (err, results) {
    if (err) return console.error(err);
    return console.log(results);
  })
}());
