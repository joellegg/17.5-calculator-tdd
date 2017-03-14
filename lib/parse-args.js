"use strict";

// example input
// calc 2*2

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

  // console.log('returnArgs', returnArgs);
  return returnArgs;
};

module.exports = parseArgs;
