(function() {
  'use strict';

  const http = require('http');
  const async = require('async');

  var url = process.argv[2]

  var isMeerkat = false;
  var count = 0;
  async.whilst(
    function() { return !isMeerkat },
    function(callback) {
      var rawData = ''
      http.get(url, function (res) {
        res.on('data', (chunk) => { rawData += chunk.toString() })
        res.on('end', function () {
          isMeerkat = rawData.trim('meerkat');
          callback(null, ++count);
        })
      }).on('error', callback)
    },
    function (err, n) {
      if (err) console.error(err);
      console.log(n);
    }
  );
}());
