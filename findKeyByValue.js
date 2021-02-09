const findKeyByValue = (obj, val) => {
  for (let keyObj in obj) {
    if (obj[keyObj] === val) {
      return keyObj;
    }
  }
};

module.exports = findKeyByValue;