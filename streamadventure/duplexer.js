(function() {
  'use strict';

  const spawn = require('child_process').spawn;
  const duplexer = require('duplexer2');

  module.exports = function (cmd, args) {
    var proc = spawn(cmd, args);
    return duplexer(proc.stdin, proc.stdout);
  }
}());
