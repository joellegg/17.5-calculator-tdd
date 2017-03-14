'use strict';

const { assert: { isNumber, isArray, include, isFunction, isString } } = require('chai');
const subtraction = require('../lib/subtract');

//because the function is directly on the imports we don't need the second describe
describe('subtract', () => {
 describe('subtraction', () => {
  it('should be a function', () => {
    isFunction(subtraction);
  });
  it('should return a number', () => {
    isNumber(subtraction(['8', '-', '1']));
  });
 });
});
