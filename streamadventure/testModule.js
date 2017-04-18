const combiner = require('./combiner.js');
//
 // var json =
 // [
 //    {"type":"book","name":"Neuromancer"},
 //    {"type":"book","name":"Snow Crash"},
 //    {"type":"genre","name":"space opera"},
 //    {"type":"book","name":"A Deepness in the Sky"},
 //    {"type":"book","name":"Void"}
 //  ]

var combine = combiner();
combine.write('{"type":"genre","name":"cyberpunk"}')
combine.write('{"type":"book","name":"Neuromancer"}');
combine.write('{"type":"book","name":"Snow Crash"}');
combine.write('{"type":"genre","name":"space opera"}');
combine.write('{"type":"book","name":"A Deepness in the Sky"}');
combine.write('{"type":"book","name":"Void"}');

combine.end();
combine.pipe(process.stdout);
