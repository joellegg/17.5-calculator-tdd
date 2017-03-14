'use strict';

const { assert: { isNumber, isArray, include, isFunction, isString } } = require('chai');
const addition = require('../lib/add');

//because the function is directly on the imports we don't need the second describe
describe('add', () => {
 describe('addition', () => {
  it('should be a function', () => {
    isFunction(addition);
  });
  it('should return a number', () => {
    isNumber(addition(['2', '+', '2']));
  });
 });
});
