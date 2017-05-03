(function() {
  'use strict';

  const http = require('http');
  const async = require('async');

  var url1 = process.argv[2]
  var url2 = process.argv[3]

  async.each([url1, url2], function (item, done) {
    var rawData = ''
    http.get(item, function (res) {
      res.on('data', (chunk) => { rawData += chunk })
      res.on('end', function () {
        return done(null)
      })
    }).on('error', (err) => {
      done(err)
    })
  }, function (err) {
    if (err) console.error(err);
  })
}());
