const freqArr1 = ["a", "a", "a"];
// const expected = {
//     a: 3,
// };

const freqArr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
// const expected = {
//     a: 2,
//     b: 1,
//     c: 3,
//     B: 1,
//     d: 1,
// };

const freqArr3 = [];
// const expected = {};

/**
 * given an array of values, return a frequency table, a frequency table is
 * a count of how many duplicates
 * there are for each unique key
 * @param {Array<Any>} arr an array of values
 * @returns {Object} a frequency table
 */
function frequencyTableBuilder(arr) {
  expected = {};
  for (i = 0; i < arr.length; i++) {
    console.log(`i is ${i}, expected[${arr[i]}] is ${expected[arr[i]]}`);
    if (expected[arr[i]]) {
      expected[arr[i]]++;
    } else {
      expected[arr[i]] = 1;
    }
    console.log(expected);
  }
  return expected;
}

console.log(frequencyTableBuilder(freqArr1));
console.log(frequencyTableBuilder(freqArr2));
console.log(frequencyTableBuilder(freqArr3));
