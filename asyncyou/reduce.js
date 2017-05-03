(function() {
  'use strict';

  const async = require('async');
  const http = require('http');

  var url = process.argv[2]

  async.reduce(['one', 'two', 'three'], 0, function(memo, item, callback) {
    var rawData = '';

    http.get(url + '?number=' + item, function (res) {
      res.on('data', (chunk) => { rawData += chunk.toString() })
      res.on('end', function () {
        callback(null, memo + Number(rawData))
      })
    }).on('error', callback)

  }, function (err, result) {
    if (err) return console.error(err);
    console.log(result);
  })

}());
