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

module.exports = middle;
