(function() {
  'use strict';

  const qhttp = require("q-io/http");

  var cache = 'http://localhost:7000'
  var database = 'http://localhost:7001'

  qhttp.read(cache).then(function (userId) {
    return qhttp.read(database + '/' + userId.toString())
  }).then(function (user) {
    console.log(JSON.parse(user.toString()));
  }).then(null, console.error).done()
}());
