'use strict';

const { assert: { isNumber, isArray, include, isFunction, isString } } = require('chai');
const division = require('../lib/divide');

describe('divide', () => {
 describe('division', () => {
  it('should be a function', () => {
    isFunction(division);
  });
  it('should return a number', () => {
    isNumber(division(['2', '/', '2']));
  });
 });
});
