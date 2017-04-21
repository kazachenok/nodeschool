function Spy(target, method) {
  var counter = {
    count: 0
  }

  var origin = target[method];
  target[method] = function () {
    counter.count++;
    origin.apply(target, arguments);
  }
  return counter;
}

module.exports = Spy
//
// var spy = Spy(console, 'error')
//
// console.error('calling console.error')
// console.error('calling console.error')
// console.error('calling console.error')
//
// console.log(spy.count) // 3
