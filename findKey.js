const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`💣 💣 💣 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`🎉 🎉 🎉 Assertion Passed: ${actual} === ${expected}`);
  }
};

// start
const findKey = (obj, callback) => {
  // for (let i in obj) {
  //   if (callback(obj[i])) {
  //     return i;
  //   }
  // }
  // return;
  return Object.keys(obj).filter((item) => callback(obj[item]) && item)[0];
};

// testing code

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");
