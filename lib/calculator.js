// determine which function to invoke

const addition = require('./add'),
      subtraction = require('./subtract'),
      multiplication = require('./multiply'),
      division = require('./divide');


const calculator = (args) => {
  let returnArgs = args;

  if (args.indexOf('/') > -1) {
    return division(returnArgs);
  } else if (args.indexOf('x') > -1) {
    return multiplication(returnArgs);
  } else if (args.indexOf('+') > -1) {
    return addition(returnArgs);
  } else if (args.indexOf('-') > -1) {
    return subtraction(returnArgs);
  }
}

module.exports = calculator
