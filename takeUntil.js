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
const takeUntil = (array, callback) => {
  let result = array;
  // for (let i in array) {
  //   if (callback(array[i])) {
  //     result.splice(i, array.length);
  //   }
  // }
  result.forEach((x , index) => callback(x) && result.splice(index, array.length));
  return result;
};

//testing code
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);
assertArraysEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5],x => x < 0), [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','), [ "I've", 'been', 'to', 'Hollywood' ]);

module.exports =  takeUntil;