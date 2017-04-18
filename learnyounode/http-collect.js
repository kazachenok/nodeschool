const bl = require('bl');
const http = require('http');

var url = process.argv[2];
http.get(url, (res) => {
  const statusCode = res.statusCode;
  var error;
  if (statusCode !== 200) {
    error = new Error(`Request Failed.\n` + `Status Code: ${statusCode}`);
  }
  if (error) {
     console.log(error.message);
     res.resume();
     return;
   }

  res.pipe(bl(function (err, data) {
    if (err) {
      return console.log(err);
    }
    console.log(data.length);
    console.log(data.toString());
  }));
}).on('error', console.log);
