const BinaryNums1 = [1, 3, 5, 6];
const BinarySearchNum1 = 4;
// const expected1 = false;

const BinaryNums2 = [4, 5, 6, 8, 12];
const BinarySearchNum2 = 5;
// const expected2 = true;

const BinaryNums3 = [3, 4, 6, 8, 12];
const BinarySearchNum3 = 3;
// const expected3 = true;

// bonus, how many times does the search num appear?
const BinaryNums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const BinarySearchNum4 = 2;
// const expected4 = 4;

/**
 * Efficiently determines if the given num exists in the given array.
 * @param {Array<number>} sortedNums an array of numbers
 * @param {number} searchNum the number to search for
 * @returns {boolean} Whether the given num exists in the given array.
 */
function binarySearch(sortedNums, searchNum) {
  while (sortedNums.length > 1) {
    let mid = Math.floor(sortedNums.length / 2);

    if (sortedNums[mid] === searchNum) {
      return true;
    } else if (sortedNums[mid] < searchNum) {
      sortedNums = sortedNums.splice(mid + 1, sortedNums.length - 1 - mid);
    } else if (sortedNums[mid] > searchNum) {
      sortedNums = sortedNums.splice(0, mid);
    }
  }
  if (sortedNums[0] === searchNum) {
    return true;
  } else {
    return false;
  }
}

/**
 * Efficiently determines how many of the given numbers are in the given array.
 * @param {Array<number>} sortedNums an array of numbers
 * @param {number} searchNum the number to search for
 * @returns {number} how many times the number appears in the array
 */
function binarySearchBonus(sortedNums, searchNum) {}

console.log(binarySearch(BinaryNums1, BinarySearchNum1));
console.log(binarySearch(BinaryNums2, BinarySearchNum2));
console.log(binarySearch(BinaryNums3, BinarySearchNum3));
// console.log(binarySearchBonus(BinaryNums4, BinarySearchNum4))
