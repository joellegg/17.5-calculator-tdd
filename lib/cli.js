"use strict";

const { argv: [,, ...args] } = process,
      parseArgs = require('./parse-args')(args);

console.log(parseArgs)
