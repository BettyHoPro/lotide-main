const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("countLetters", () => {
  it(`return 1 for "lighthouse in the house"'s g `, () => {
    assert.strictEqual(countLetters("lighthouse in the house").g, 1);
  });
  it(`return 3 for "lighthouse in the house"'s e`, () => {
    assert.strictEqual(countLetters("lighthouse in the house").e, 3);
  });
  it(`return 2 for "LHL"'s L`, () => {
    assert.strictEqual(countLetters('LHL').L, 2);
  });
  it(`return { L: 2, H: 1 }for "LHL"`, () => {
    assert.deepEqual(countLetters('LHL'), { L: 2, H: 1 });
  });
  it(`return {
    l: 1,
    i: 2,
    g: 1,
    h: 4,
    t: 2,
    o: 2,
    u: 2,
    s: 2,
    e: 3,
    n: 1,
  }for "lighthouse in the house"`, () => {
    assert.deepEqual(countLetters('lighthouse in the house'), {
      l: 1,
      i: 2,
      g: 1,
      h: 4,
      t: 2,
      o: 2,
      u: 2,
      s: 2,
      e: 3,
      n: 1,
    });
  });
});