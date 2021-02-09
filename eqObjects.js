const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;