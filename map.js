const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`🎉 🎉 🎉 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`💣 💣 💣 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i in arr1) {
    if (arr1[i] !== arr2[i])
      return false;
  }
  return true;
};

// start
//const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
// const result1 = map(words, word => word[0]);
// console.log(result1);

// testing code
//assertArraysEqual(map(["ground"] ),["g"]);
assertArraysEqual(map(["ground", "control", "to", "major", "tom"], (word => word[0])),[ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map([2, 4, 7], (x => x * 2)),[4, 8, 14]);
assertArraysEqual(map([{name: "Mick", high: 160}, {name: "Tom", high: 165},{name: "Amy", high: 170}]
, (x => x.high > 161 && `!${x.name}` || x.name)),["Mick", "!Tom", "!Amy"]);
assertArraysEqual(map(["ground", "control", "to"], (x => x.length)),[6,7,2]);
// assertArraysEqual(map(Object.keys({
//   "01": {name: "Mick", high: 160},
//   "02": {name: "Tom", high: 165},
//   "03": {name: "Amy", high: 170}
// }), ((x, index) => x[index]),["Mick", "Tom", "Amy"]));

module.exports = map;