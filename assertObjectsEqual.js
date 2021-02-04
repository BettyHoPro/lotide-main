const eqObjects = (obj1, obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (let keyObj in obj1) {
    if (Array.isArray(obj1[keyObj])) {

      if (!eqArrays(obj1[keyObj], obj2[keyObj])) {
        return false;
      }
      return true;
    }
    if (obj1[keyObj] !== obj2[keyObj]) {
      return false;
    }
  }
  return true;
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

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`🎉 🎉 🎉 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`💣 💣 💣 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// testing code

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true


const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// => true
assertObjectsEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
// => false
assertObjectsEqual(cd, cd2);