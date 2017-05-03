(function() {
  'use strict';

  const fs = require('fs');
  const async = require('async');
  const http = require('http');

  var path = process.argv[2]

  function readInputFile(cb) {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) return cb(err)
      return cb(null, data)
    })
  }

  function getData(url, cb) {
    var rawData = '';
    http.get(url, function (res) {
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', function () {
        cb(null, rawData)
      });
      res.on('error', cb)
    })
  }

  function done(err, result) {
    if (err) return console.error(err);
    console.log(result);
  }
  async.waterfall([
    readInputFile,
    getData
  ], done)



}());
