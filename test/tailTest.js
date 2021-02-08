const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it(`return ["Lighthouse", "Labs"] for  ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it(`return ["Lighthouse", "Labs"] for  ["Yo Yo", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it(`return ["Lighthouse", "Labs"] for  ["Yo Yo", "Lighthouse", "Labs"]`, () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(words.length, 3);
  });
  it(`return ["Lighthouse", "Labs"] for  ["Yo Yo", "Lighthouse", "Labs"]`, () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words).length, 2);
  });
});