"use strict";

const calculator = require('../lib/calculator');

// example input
// calc 2*2

// parse -> calc -> add || subtract || divide || multiply

// parseArgs should
// return a number
// run the calculator passing in user input
const parseArgs = (args) => {
  let returnArgs = [];

  if (args[0].indexOf('/') > -1) {
    returnArgs = args[0].split('/');
    returnArgs.splice(1, 0, '/');
  } else if (args[0].indexOf('x') > -1) {
    returnArgs = args[0].split('x');
    returnArgs.splice(1, 0, 'x');
  } else if (args[0].indexOf('+') > -1) {
    returnArgs = args[0].split('+');
    returnArgs.splice(1, 0, '+');
  } else if (args[0].indexOf('-') > -1) {
    returnArgs = args[0].split('-');
    returnArgs.splice(1, 0, '-');
  }

  return calculator(returnArgs);
};

module.exports = parseArgs;
