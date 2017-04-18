const http = require('http')
const url = require('url')

var port = process.argv[2]
var server = http.createServer(function (req, res) {
  reqUrl = url.parse(req.url, true)
  var answer = '0'
  if (reqUrl.pathname === '/api/parsetime') {
    var date = new Date(reqUrl.query.iso)
    answer = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    }
  }
  if (reqUrl.pathname === '/api/unixtime') {
    var date = new Date(reqUrl.query.iso)
    answer = {
      unixtime : date.getTime()
    }
  }
  if (answer) {
    res.writeHead(200, { 'Content-Type' : 'application/json'})
    res.end(JSON.stringify(answer))
  } else {
    res.writeHead(404)
    res.end()
  }
})

server.listen(port)
