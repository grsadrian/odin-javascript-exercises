const removeFromArray = function (arr, ...args) {
  args.forEach((arg) => {
    argIndex = arr.indexOf(arg);
    while (argIndex >= 0) {
      arr.splice(argIndex, 1);
      argIndex = arr.indexOf(arg);
    }
  });
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
