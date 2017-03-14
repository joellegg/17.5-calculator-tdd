'use strict';

const { assert: { isArray, include, isFunction, isString } } = require('chai');
const parseArgs = require('../lib/parse-args');

//because the function is directly on the imports we don't need the second describe
describe('parse-args', () => {
 describe('parseArgs', () => {
  it('should be a function', () => {
    isFunction(parseArgs);
  });
  it('should return an array', () => {
    isArray(parseArgs('2x2'));
  });
  it('should contain an operator', () => {
    include(parseArgs('2x2'), 'x');
    include(parseArgs('2+2'), '+');
    include(parseArgs('2-2'), '-');
    include(parseArgs('2/2'), '/');
  });
 });
});
