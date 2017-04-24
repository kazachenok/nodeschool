(function() {
  'use strict';

  var invalidJSON = process.argv[2];
  function parsePromised(json) {
    return new Promise(function (resolve, reject) {
      try {
        resolve(JSON.parse(invalidJSON))
      } catch (e) {
        reject(e)
      }
    })
  }

  parsePromised(invalidJSON)
    .then(console.log)
    .then(null, console.log)
}());
