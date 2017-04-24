(function() {
  'use strict';

  const http = require("q-io/http");

  var url = 'http://localhost:1337'

  http.read(url).then(function (res) {
    console.log(JSON.parse(res))
  }).then(null, console.error).done();
}());
