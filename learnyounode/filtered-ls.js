var fs = require('fs');
const path = require('path');

var dir = process.argv[2];
var filterBy = process.argv[3];

fs.readdir(dir, function (err, list) {
  if(err) {
    return console.log(err);
  }

  list.forEach(function (elem) {
    var filterExt = '.' + filterBy;
    if (path.extname(elem) === filterExt) {
      console.log(elem);
    }
  });
});
