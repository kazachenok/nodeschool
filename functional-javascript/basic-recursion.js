function reduce(arr, fn, initial) {
  function step(ind, value) {
      if (ind > arr.length - 1) return value;
      var curVal = fn(value, arr[ind], ind, arr);
      return step(++ind, curVal);
  };

  return step(0, initial);
}

module.exports = reduce;
