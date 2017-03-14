'use strict';

const { assert: { isNumber, isArray, include, isFunction, isString } } = require('chai');
const multiplication = require('../lib/multiply');

//because the function is directly on the imports we don't need the second describe
describe('multiply', () => {
  describe('multiplication', () => {
    it('should be a function', () => {
      isFunction(multiplication);
    });
    it('should return a number', () => {
      isNumber(multiplication(['3', 'x', '3']));
    });
  });
});
