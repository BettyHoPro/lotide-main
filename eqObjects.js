const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`💣 💣 💣 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`🎉 🎉 🎉 Assertion Passed: ${actual} === ${expected}`);
  }
};

// start
const eqObjects = (obj1, obj2) => {
  // console.log(`obj1 keys: ${Object.keys(obj1)} `);
  // console.log(`obj2 keys: ${Object.keys(obj2)} `);
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (let keyObj in obj1) {
    if (obj1[keyObj] !== obj2[keyObj])
      return false;
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

const dc = { d: "1", c: "2" };
eqObjects(dc, ba); // => false
assertEqual(eqObjects(dc, ba), false);