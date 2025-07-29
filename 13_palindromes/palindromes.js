const reverseString = require("../07_reverseString/reverseString");

const palindromes = function (string) {
  const filteredString = string
    .toLocaleLowerCase()
    .replaceAll(/[!,\.]/g, "")
    .replaceAll(" ", "");

  return reverseString(filteredString) === filteredString;
};

// Do not edit below this line
module.exports = palindromes;
