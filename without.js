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
const without = (source, itemsToRemove) => {
  let result = Object.assign([], source); //clone the source arr, also can code in this way: let result = [...source]

  for (let i in source) {
    for (let x in itemsToRemove) {
      if (source[i] === itemsToRemove[x]) {
        result.splice(i, 1);
        break;
      }
    }
  }
  return result;
  // let result = [];
  // source.forEach((s) => {
  //   let add = true;
  //   itemsToRemove.forEach((x) =>{
  //     if(s === x){
  //       add = false
  //     }
  //   });
  //   if(add){
  //     result.push(s)
  //   }
  // });
  // return result;
};


//testing code
console.log(without([1, 2, 3], [1]));// => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"]));// => ["1", "2"]

// case 1
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
