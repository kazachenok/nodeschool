var filteredModule = require('./filtered-ls.module.js')
var dir = process.argv[2];
var filter = process.argv[3];

filteredModule(dir, filter , function (err, data) {
  if (err) {
    return console.log(err);
  }

  data.forEach((elem) => console.log(elem) );
});
