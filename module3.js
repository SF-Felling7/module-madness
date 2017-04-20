var randomNumber = require('./module1');
var convertNumber = require('./module2');

var numeral = {
  makeNumber: function () {
      return convertNumber(randomNumber(100, 1000000));

  },
  getNumber: function () {
    return "Account balance: \n";
  }
};

module.exports = numeral;
