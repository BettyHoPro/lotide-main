const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it(`return  true for [1, 2, 3], [1, 2, 3]`, () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it(`return false for  [1, 2, 3], [3, 2, 1]`, () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  it(`return true for ["1", "2", "3"], ["1", "2", "3"]"`, () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });
  it(`return false for  ["1", "2", "3"], ["1", "2", 3]`, () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
  it(`return false for ["1", "2"], ["1", "2", 3]`, () => {
    assert.strictEqual(eqArrays(["1", "2"], ["1", "2", 3]), false);
  });
});