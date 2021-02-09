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

module.exports = countLetters;
