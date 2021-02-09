const without = require('../without');
const assert = require('chai').assert;

describe("#without", () => {
  it(`return [2, 3] for [1, 2, 3], [1]`, () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it(`return ["1", "2"] for ["1", "2", "3"], [1, 2, "3"])`, () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
  it(`return ["hello", "world", "lighthouse"] to make sure the original array is not effected by method`, () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]);
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
  
});
