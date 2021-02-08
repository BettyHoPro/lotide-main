const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`💣 💣 💣 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`🎉 🎉 🎉 Assertion Passed: ${actual} === ${expected}`);
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
const eqObjects = (obj1, obj2) => {
  // console.log(`obj1 keys: ${Object.keys(obj1)} `);
  // console.log(`obj2 keys: ${Object.keys(obj2)} `);
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



//test code
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, abc), false);

const ac = { a: "1", c: "2" };
eqObjects(ac, ba); // => false
assertEqual(eqObjects(ac, ba), false);

const dc1 = { d: "1", c: "2" };
eqObjects(dc1, ba); // => false
assertEqual(eqObjects(dc1, ba), false);

console.log("======= Step 3 =======");
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
assertEqual(eqObjects(cd, cd2), false);

const cd3 = { c: ["1", 2], d: ["2", 3, 4] };
eqObjects(cd, cd3); // => false
assertEqual(eqObjects(cd, cd3), false);

const de = { e: ["1", 2], d: ["2", 3, 4] };
eqObjects(cd, de); // => false
assertEqual(eqObjects(cd, de), false);

module.exports = eqObjects;