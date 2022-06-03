const pairs1 = [1];
// const expected = [1];

const pairs2 = [5, 4, 5];
// const expected = [4];

const pairs3 = [5, 4, 3, 4, 3, 4, 5];
// const expected = [4];

const pairs4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2, 7];
// const expected = [1, 7];

function frequencyTableBuilder(arr) {
  expected = {};
  for (i = 0; i < arr.length; i++) {
    //console.log(`i is ${i}, expected[${arr[i]}] is ${expected[arr[i]]}`);
    if (expected[arr[i]]) {
      expected[arr[i]]++;
    } else {
      expected[arr[i]] = 1;
    }
    //console.log(expected);
  }
  return expected;
}

/**
 * given an array of numbers, return an array of all the numbers that dont have pairs
 * @param {Array<Numbers>} nums an array of numbers
 * @returns {Array<Numbers>} an array of numbers without a pair
 */
function oddOccurrencesInArray(nums) {
  freq = frequencyTableBuilder(nums);
  arr = [];
  for (let key in freq) {
    if (freq[key] % 2 != 0) {
      arr.push(key);
    }
  }
  return arr;
}

console.log(oddOccurrencesInArray(pairs1));
console.log(oddOccurrencesInArray(pairs2));
console.log(oddOccurrencesInArray(pairs3));
console.log(oddOccurrencesInArray(pairs4));
