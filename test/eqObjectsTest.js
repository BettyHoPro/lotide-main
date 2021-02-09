const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe("#eqObjects", () => {
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  const abc = { a: "1", b: "2", c: "3" };
  const ac = { a: "1", c: "2" };
  const dc1 = { d: "1", c: "2" };
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  const cd2 = { c: "1", d: ["2", 3, 4] };
  const cd3 = { c: ["1", 2], d: ["2", 3, 4] };
  const de = { e: ["1", 2], d: ["2", 3, 4] };
  it(`return  true for { a: "1", b: "2" }, { b: "2", a: "1" }`, () => {
    assert.strictEqual(eqObjects(ab, ba), true);
  });
  it(`return false for { a: "1", b: "2" }, { a: "1", b: "2", c: "3" }`, () => {
    assert.strictEqual(eqObjects(ab, abc), false);
  });
  it(`return false for { a: "1", c: "2" },  { b: "2", a: "1" }`, () => {
    assert.strictEqual(eqObjects(ac, ba), false);
  });
  it(`return false for  { d: "1", c: "2" }, { b: "2", a: "1" }`, () => {
    assert.strictEqual(eqObjects(dc1, ba), false);
  });
  it(`return true for { c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }`, () => {
    assert.strictEqual(eqObjects(cd, dc), true);
  });

  it(`return false for { c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] }`, () => {
    assert.strictEqual(eqObjects(cd, cd2), false);
  });
  it(`return false for  { c: "1", d: ["2", 3] , { c: ["1", 2], d: ["2", 3, 4] `, () => {
    assert.strictEqual(eqObjects(cd, cd3), false);
  });
  it(`return false for { c: "1", d: ["2", 3] , { e: ["1", 2], d: ["2", 3, 4] }`, () => {
    assert.strictEqual(eqObjects(cd, de), false);
  });
});




