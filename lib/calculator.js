// determine which function to invoke

const addition = require('./add'),
      subtraction = require('./subtract'),
      multiplication = require('./multiply'),
      division = require('./divide');


const calculator = (args) => {
  let returnArgs = args;

  if (args.indexOf('/') > -1) {
    console.log('operator /', returnArgs);
    return division(returnArgs);
  } else if (args.indexOf('x') > -1) {
    console.log('operator x', returnArgs);
    return multiplication(returnArgs);
  } else if (args.indexOf('+') > -1) {
    console.log('operator +', returnArgs);
    return addition(returnArgs);
  } else if (args.indexOf('-') > -1) {
    console.log('operator -', returnArgs);
    return subtraction(returnArgs);
  }
}

module.exports = calculator
