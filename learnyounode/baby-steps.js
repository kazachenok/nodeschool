var sum = 0;
for (var ind in process.argv) {
  var val = +process.argv[ind];
  if (!isNaN(val)) {
    sum += val;
  }
}
console.log(sum);
