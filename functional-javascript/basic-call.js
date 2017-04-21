function duckCount() {
  function filterByQuack(item) {
    return Object.prototype.hasOwnProperty.call(item, 'quack');
  };

  return Array.prototype.filter.call(arguments, filterByQuack).length;
}

module.exports = duckCount;
// var notDuck = Object.create({quack: true})
// var duck = {quack: true}
//
// duckCount(duck, notDuck) // 1
