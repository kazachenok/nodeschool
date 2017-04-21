function repeat(operation, num) {
  return function() {
    if (num <= 0) return;
    operation();
    return repeat(operation, --num);
  }
}

function trampoline(fn) {
  do {
    fn = fn();
  } while (typeof fn === "function");
}

module.exports = function(operation, num) {
  trampoline(function () {
    return repeat(operation, num);
  })
}
