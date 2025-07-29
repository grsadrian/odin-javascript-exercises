const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (numbers) {
  let sum = 0;
  numbers.forEach((number) => {
    sum += number;
  });
  return sum;
};

const multiply = function (numbers) {
  let result = 1;
  numbers.forEach((number) => {
    result *= number;
  });
  return result;
};

const power = function (x, y) {
  return x ** y;
};

const factorial = function (x) {
  let result = x;

  if (x === 0) {
    result = 1;
  } else {
    for (x; x > 1; x--) {
      result *= x - 1;
    }
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
