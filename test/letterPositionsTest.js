const assert = require('chai').assert;
const letterPositions = require("../letterPositions");

describe("#letterPositions", () => {
  it(`return [0] for  Hello's h`, () => {
    assert.deepEqual(letterPositions("hello").h,[0]);
  });
  it(`return [1] for  Hello's e`, () => {
    assert.deepEqual(letterPositions("hello").e,[1]);
  });
  it(`return [2, 3] for  Hello's l`, () => {
    assert.deepEqual(letterPositions("hello").l,[2, 3]);
  });
  it(`return [4] for  Hello's o`, () => {
    assert.deepEqual(letterPositions("hello").o,[4]);
  });
});