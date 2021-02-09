const letterPositions = (str) => {
  let results = {};
  str.split('').forEach((letter,index) => {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(index);
      } else {
        results[letter] = [index];
      }
    }
  });
  return results;
};

module.exports = letterPositions;