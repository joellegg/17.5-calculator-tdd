// determine which function to invoke

const addition = require('./add'),
      subtraction = require('./subtract'),
      multiplication = require('./multiply'),
      division = require('./divide');


const calculator = (args) => {
  console.log(args)
  return args
}

module.exports = calculator
