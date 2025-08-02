const fibonacci = function (number) {
  if (isNaN(parseInt(number)) || number < 0) {
    return "OOPS";
  }

  let arrayNumbers = [];
  let fibonacciSequence = [0, 1];
  for (let i = 0; i <= number; i++) {
    arrayNumbers.push(i);
  }

  for (let i = 2; i <= arrayNumbers.length; i++) {
    fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i - 2]);
  }

  return fibonacciSequence[number];
};

// Do not edit below this line
module.exports = fibonacci;
