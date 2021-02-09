const map = require('../map');
const assert = require('chai').assert;

describe("#map", () => {
  it(`return [ 'g', 'c', 't', 'm', 't' ] for  ["ground", "control", "to", "major", "tom"], (word => word[0])`, () => {
    assert.deepEqual(map(["ground", "control", "to", "major", "tom"], (word => word[0])),[ 'g', 'c', 't', 'm', 't' ]);
  });
  it(`return [4, 8, 14] for  [2, 4, 7], (x => x * 2)`, () => {
    assert.deepEqual(map([2, 4, 7], (x => x * 2)),[4, 8, 14]);
  });
  it(`return ["Mick", "!Tom", "!Amy"] for  [{name: "Mick", high: 160}, {name: "Tom", high: 165},{name: "Amy", high: 170}] if the person is taller than 161, add ! in the name`, () => {
    assert.deepEqual(map([{name: "Mick", high: 160}, {name: "Tom", high: 165},{name: "Amy", high: 170}]
    , (x => x.high > 161 && `!${x.name}` || x.name)),["Mick", "!Tom", "!Amy"]);
  });
  it(`return [6,7,2] for  ["ground", "control", "to"], (x => x.length)`, () => {
    assert.deepEqual(map(["ground", "control", "to"], (x => x.length)),[6,7,2]);
  });
});