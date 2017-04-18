module.exports = function (dir, filter, callback) {
  var fs = require('fs');
  var path = require('path');

  fs.readdir(dir, function (err, list) {
    if(err) {
      return callback(err);
    }

    var filterExt = '.' + filter;
    var filterdList = list.filter((file) => path.extname(file) === filterExt);
    callback(null, filterdList);
  });
}
