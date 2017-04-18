const net = require('net');
const strftime = require('strftime');

var port = process.argv[2];

var server = net.createServer(listener)
  .on('error', console.log);

function listener(socket) {
  var date = strftime('%Y-%m-%d %H:%M%n')
  socket.write(date);
  socket.end();
};

server.listen(port);
