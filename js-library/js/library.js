
var veryFancyMathLibrary = {

  add: function (num1, num2) {
    return num1 + num2;
  },

  subtract: function (num1, num2) {
    return num2 - num1;
  },

  divide: function (num1, num2) {
    return num1 / num2;
  },

  multiply: function (num1, num2) {
    return num1 * num2;
  },

  increment: function (num) {
    return num++;
  },

  decrement: function (num) {
    return num--;
  },

  remainder: function (num1, num2) {
    return num1 % num2;
  },

  sumAndDouble: function (num1, num2) {
    var sum = num1 + num2;
    return sum * 2;
  },

  divideAndTriple: function (num1, num2) {
    var quotient = num1 / num2;
    return quotient * 3;
  },

  cubeMeBaby: function (num) {
    return num * num * num;
  }

};