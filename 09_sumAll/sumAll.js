const sumAll = function (num1, num2) {
  if (
    !(num1 >= 0 && num2 >= 0) ||
    !(num1 % 1 === 0 && num2 % 1 === 0) ||
    !(typeof num1 === "number" && typeof num2 === "number")
  ) {
    return "ERROR";
  }

  let numArr = [num2];
  let sum = 0;

  if (num1 > num2) {
    numArr = [num1];
    for (i = num2; i < num1; i++) numArr.unshift(i);
  }

  for (i = num1; i < num2; i++) {
    numArr.unshift(i);
  }

  numArr.forEach((num) => {
    sum += num;
  });

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
