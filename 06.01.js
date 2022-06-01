const invertObj1 = { name: "Zaphod", charm: "high", morals: "dicey" };
// const expected = { Zaphod: "name", high: "charm", dicey: "morals" };

/**
 * given an object, return an object with the keys and values swapped
 * @param {Object} obj an object
 * @returns {Object} an object with keys and values swapped
 */
function invertObj(obj) {
  expected = {};
  for (let key in obj) {
    // console.log(key);
    expected[obj[key]] = key;
    // console.log(expected);
  }
  return expected;
}

console.log(invertObj(invertObj1));
