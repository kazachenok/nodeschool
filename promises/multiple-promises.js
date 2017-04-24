(function() {
  'use strict';

  function all(promise1, promise2) {
    return new Promise(function (resolve, reject) {
      var results = []

      promise1.then(counter)
      promise2.then(counter)

      function counter(res) {
        results.push(res);
        if (results.length == 2) resolve(results);
      }
    })
  }

  all(getPromise1(), getPromise2()).then(console.log)
}());
