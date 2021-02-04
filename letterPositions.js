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
const letterPositions = (str) => {
  let results = {};
  str.split('').forEach((letter,index) => {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(index);
      } else {
        results[letter] = [index];
      }
    }
  });
  return results;
};

// test
assertArraysEqual(letterPositions("hello").h,[0]);
assertArraysEqual(letterPositions("hello").e,[1]);
assertArraysEqual(letterPositions("hello").l,[2, 3]);
assertArraysEqual(letterPositions("hello").o,[4]);
