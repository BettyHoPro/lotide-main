const takeUntil = (array, callback) => {
  let result = array;
  result.forEach((x , index) => callback(x) && result.splice(index, array.length));
  return result;
};

module.exports =  takeUntil;