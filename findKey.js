const findKey = (obj, callback) => Object.keys(obj).filter((item) => callback(obj[item]) && item)[0];

module.exports = findKey;