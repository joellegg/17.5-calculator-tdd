'use strict';

const { assert: { isNumber, isArray, include, isFunction, isString } } = require('chai');
const calculation = require('../lib/calculator');

describe('calculator', () => {
 describe('calculation', () => {
  it('should be a function', () => {
    isFunction(calculation);
  });
  it('should return a number', () => {
    isNumber(calculation(['2', '/', '2']));
  });
 });
});
