(function() {
  'use strict';

  var promise = Promise.resolve('Hello resolved promise')
  promise.then(console.log)

  var promiseRejected = Promise.reject(new Error('Hello rejected promise'))
  promiseRejected.catch((err) => console.log(err.message));

}());
