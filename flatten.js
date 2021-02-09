//const eqArrays = require("./eqArrays");
//const assertArraysEqual = require("./assertArraysEqual");

const flatten = function(arr) {
  let result = [];
  arr.forEach((x) => {
    if (Array.isArray(x)) {
      x.forEach((y) => {
        result.push(y);
      });
    } else {
      result.push(x);
    }
  });
  return result;
};

module.exports =  flatten;