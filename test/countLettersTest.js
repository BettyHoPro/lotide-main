const assert = require('chai').assert;
const countLetters = require('../countLetters');

assertEqual(countLetters("lighthouse in the house").g, 1);
assertEqual(countLetters("lighthouse in the house").e, 3);
// {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }
assertEqual(countLetters('LHL').L, 2);
//{ L: 2, H: 1 }




describe("#countOnly", () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe",
  ];
  const result1 = countOnly(firstNames, {
    Jason: true,
    Karima: true,
    Fang: true,
    Agouhanna: false,
  });
  it(`return 1 for "Jason"`, () => {
    assert.strictEqual(countOnly(firstNames, result1).Jason,1);
  });
  it(`return undefined for "Karima"`, () => {
    assert.strictEqual(countOnly(firstNames, result1).Karima,undefined);
  });
  it(`return 2 for "Fang"`, () => {
    assert.strictEqual(countOnly(firstNames, result1).Fang,2);
  });
  it(`return undefined for "Agouhanna"`, () => {
    assert.strictEqual(countOnly(firstNames, result1).Agouhanna, undefined);
  });
});