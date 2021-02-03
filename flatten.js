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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`🎉 🎉 🎉 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`💣 💣 💣 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

// start
const flatten = function(arr) {
  let result = [];
  arr.forEach((x) => {
    if (Array.isArray(x)) {
      x.forEach((y) => {
        result.push(y);
      });
    } else {
      result.push(x);
    }
  });
  return result;
};

// testing code
// console.log(flatten([1, 2, [3, 4], 5, [6]]));
// console.log(flatten([5, 3, [3, 4], 5, [6]]));
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[ 1, 2, 3, 4, 5, 6 ]);
assertArraysEqual(flatten([5, 3, [3, 4], 5, [6]]),[ 5, 3, 3, 4, 5, 6 ]);