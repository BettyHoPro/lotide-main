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
const middle = function(arr) {
  let midIndex = Math.floor(arr.length / 2);
  let result = [];
  if (arr.length < 3) {
    result = [];
  } else if (arr.length % 2 === 0) {
    result.push(arr[midIndex - 1], arr[midIndex]);
  } else {
    result.push(arr[midIndex]);
  }
  return result;
};

// testing code
// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []
// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]
// console.log(middle([1, 2, 3, 4]));// => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1, 2]),[]);
assertArraysEqual(middle([1, 2, 3]),[2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);