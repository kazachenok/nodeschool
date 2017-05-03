(function() {
  'use strict';

  const http = require('http');
  const async = require('async');

  var hostname = process.argv[2]
  var port = process.argv[3]

  var getUsersUrl = 'http://' + hostname + ':' + port

  async.series({
    created: (done) => {
      createUsers(5, done)
    },
    users: (done) => {
      getUsers(done)
    }
  }, function (err, res) {
    if (err) return console.error(err);
    console.log(res.users);
  })

  function createUsers(limit, done) {
    async.times(limit, function (n, next) {
      createUser(n, next)
    }, function (err) {
      if (err) return done(err);
      return done(null, 'created')
    })
  }

  function createUser(userId, done) {
    var user = { "user_id" : userId + 1 }
    var postdata = JSON.stringify(user)

    var opts = {
      hostname: hostname,
      port: port,
      path: '/users/create',
      method: 'POST',
      headers: {
        'Content-Length' : postdata.length
      }
    }

    var req = http.request(opts, (res) => {
      res.setEncoding('utf8');
      res.on('data', (chunk) => {});
      res.on('end', () => {
        done();
      });
    })

    req.on('error', done);

    req.write(postdata);
    req.end();
  }

  function getUsers(done) {
    var rawData = '';
    http.get(getUsersUrl, function (res) {
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', function () {
        done(null, rawData)
      });
      res.on('error', done)
    })
  }
}());
