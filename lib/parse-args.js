"use strict";

const calculator = require('../lib/calculator');

// example input
// calc 2*2

// parse -> calc -> add || subtract || divide || multiply

// parseArgs should
// return a number
// check for math symbol
// check for 2 numbers
const parseArgs = (args) => {
  let returnArgs = args;
  if (args.indexOf('/') > -1) {
    returnArgs = args.split('/');
    returnArgs.splice(1, 0, '/');
  } else if (args.indexOf('x') > -1) {
    returnArgs = args.split('x');
    returnArgs.splice(1, 0, 'x');
  } else if (args.indexOf('+') > -1) {
    returnArgs = args.split('+');
    returnArgs.splice(1, 0, '+');
  } else if (args.indexOf('-') > -1) {
    returnArgs = args.split('-');
    returnArgs.splice(1, 0, '-');
  }
  // calculator(returnArgs);
  return calculator(returnArgs);
};

module.exports = parseArgs;
