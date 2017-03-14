'use strict';

const division = (userInput) => {
  let value = (Number(userInput[0])/Number(userInput[2]));
  console.log(value)
  return value;
}

module.exports = division
