function higherOrderFunction(operation, num) {
  if (num <= 0) return;
  operation()
  return higherOrderFunction(operation, --num);
}

module.exports = higherOrderFunction;
