const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`💣 💣 💣 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`🎉 🎉 🎉 Assertion Passed: ${actual} === ${expected}`);
  }
};

// start
const countLetters = (str) => {
  let results = {};
  for (let letter of str.split(" ").join("")) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

//test code
console.log(countLetters("lighthouse in the house"));
console.log(countLetters('LHL'));
assertEqual(countLetters("lighthouse in the house").g, 1);
assertEqual(countLetters("lighthouse in the house").e, 3);
// {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }
assertEqual(countLetters('LHL').L, 2);
//{ L: 2, H: 1 }