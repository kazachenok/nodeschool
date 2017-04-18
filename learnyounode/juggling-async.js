const bl = require('bl');
const http = require('http');

var results = [];
var finished = 0;

for (var ind = 0; ind < 3; ind++) {
  simpleGet(process.argv[2 + ind], (err, data) => {
    finished++;
    if (err) {
      console.log(err);
    }
    else {
      results[data.urlInd] = data.data;
    }
    if (finished === 3) {
      printResult(results);
    }
  }, ind);
}

function printResult(results) {
  results.forEach(elem => console.log(elem));
};

function simpleGet(url, callback, urlIndex) {
  http.get(url, (res) => {
    const statusCode = res.statusCode;
    var error;
    if (statusCode !== 200) {
      error = new Error(`Request Failed.\n` + `Status Code: ${statusCode}`);
    }
    if (error) {
      res.resume();
      return callback(error);
    }

    res.pipe(bl(function (err, data) {
      if (err) {
        return callback(error);
      }

      var response = {
        urlInd : urlIndex,
        data : data.toString()
      };

      callback(null, response);
    }));
  }).on('error', callback);
};
