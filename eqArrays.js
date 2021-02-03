//function implementation
const assertEqual = function(actual, expected) {
  // console.log(` Arr1: ${actual},${actual.length}`);
  // console.log(` Arr2: ${expected},${expected.length} `);
  if (actual !== expected) {
    console.log(`💣 💣 💣 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`🎉 🎉 🎉 Assertion Passed: ${actual} === ${expected}`);
  }
};

// start
const eqArrays = function(arr1, arr2) {
  // console.log(` Arr1: ${arr1},${arr1.length}`);
  // console.log(` Arr2: ${arr2},${arr2.length} `);
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i in arr1) {
    if (arr1[i] !== arr2[i])
      return false;
  }
  return true;
};

//test code
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays(["1", "2"], ["1", "2", 3]), false);