(function() {
  'use strict';

  first().then(function (res) {
    return second(res);
  }).then(console.log)

}());
