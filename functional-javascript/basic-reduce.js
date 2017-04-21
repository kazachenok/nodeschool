function countWords(inputWords) {
  return inputWords.reduce(function (acc, val) {
    acc[val] = ++acc[val] || 1;
    return acc;
  }, {})
}
//
var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
console.log(countWords(inputWords));

//module.exports = countWords;
