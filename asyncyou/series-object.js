(function() {
  'use strict';

  const async = require('async');
  const http = require('http');

  var url1 = process.argv[2]
  var url2 = process.argv[3]

  function getRequest(url, done) {
    var rawData = '';
    http.get(url, function (res) {
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', function () {
        done(null, rawData)
      });
      res.on('error', done)
    })
  }

  async.series({
    requestOne: function (done) {
      getRequest(url1, done)
    },
    requestTwo: function (done) {
      getRequest(url2, done)
    }
  }, function (err, res) {
    if (err) return console.error(err);
    console.log(res);
  })
}());
