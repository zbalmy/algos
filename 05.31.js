const keys1 = ["abc", 3, "yo"];
const vals1 = [42, "wassup", true];
// const expected = {
//     abc: 42,
//     3: "wassup",
//     yo: true,
//     };

/**
 * given two arrays, return an object with the first array as the keys and the
 * second array as the values
 * @param {Array<Any>} keys an array of keys
 * @param {Array<Any>} values an array of values
 * @returns {Object} object with keys and values
 */
function zipArraysIntoMap(keys, values) {
  expected = {};
  for (i = 0; i < keys.length; i++) {
    expected[keys[i]] = values[i];
  }
  return expected;
}

console.log(zipArraysIntoMap(keys1, vals1));
