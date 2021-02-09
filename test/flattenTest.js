const assert = require('chai').assert;
const flatten = require("../flatten");

describe("#flatten", () => {
  it(`return [ 1, 2, 3, 4, 5, 6 ] for  [1, 2, [3, 4], 5, [6]]`, () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]),[ 1, 2, 3, 4, 5, 6 ]);
  });
  it(`return [ 5, 3, 3, 4, 5, 6 ] for  [5, 3, [3, 4], 5, [6]]`, () => {
    assert.deepEqual(flatten([5, 3, [3, 4], 5, [6]]), [ 5, 3, 3, 4, 5, 6 ]);
  });
});