const assertArraysEqual = require('../assertArraysEqual');


assertArraysEqual([1,3,4], [1,0,5]);
assertArraysEqual([3,4], [3,4]);
assertArraysEqual(["1", "2"], ["1"]);
assertArraysEqual([], []);
