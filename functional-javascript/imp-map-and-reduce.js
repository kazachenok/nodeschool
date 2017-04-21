function arrayMap(arr, fn, thisArg) {
  return arr.reduce(function (acc, val, ind, arr) {
    acc.push(fn.call(thisArg, val, ind, arr));
    return acc;
  }, []);
}

module.exports = arrayMap;
