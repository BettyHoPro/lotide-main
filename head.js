const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`💣 💣 💣 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`🎉 🎉 🎉 Assertion Passed: ${actual} === ${expected}`);
  }
};

// start //
const head = function(arr) {
  return arr[0];
};

// testing code
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);
assertEqual(head(["a"]), "a");