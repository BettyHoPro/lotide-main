const without = (source, itemsToRemove) => {
  let result = Object.assign([], source);
  for (let i in source) {
    for (let x in itemsToRemove) {
      if (source[i] === itemsToRemove[x]) {
        result.splice(i, 1);
        break;
      }
    }
  }
  return result;
};

module.exports = without;