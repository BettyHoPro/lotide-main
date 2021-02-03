const eqArrays = function(arr1, arr2) {
  console.log(` Arr1: ${arr1}`);
  console.log(` Arr2: ${arr2}`);
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
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`🎉 🎉 🎉 Assertion Passed: ${arr1} === ${arr2}`);
  } else { 
    console.log(`💣 💣 💣 Assertion Failed: ${arr1} !== ${arr2}`);
  }
  console.log(` assertArraysEqual Arr1: ${arr1}`);
  console.log(` assertArraysEqual Arr2: ${arr2}`);
};

// testing code
assertArraysEqual([1,3,4], [1,0,5]);
assertArraysEqual([3,4], [3,4]);
assertArraysEqual(["1", "2"], ["1"]);
assertArraysEqual([], []);