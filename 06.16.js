const BalArr1 = [-2, 5, 7, 0, 3];
// const expected = 2;

const BalArr2 = [9, 9];
// const expected = -1;

const BalArr3 = [1, 5, 9];
// const expected = -1

const BalArr4 = [10, 99, 2, 2, 2, 1, 1, 1, 1];
// const expected = 1

const BalArr5 = [2, 2, 2, 2, 1, 1, 99, 10];
// const expected = 6

/**
 * create a function takes an array and compares the sum of all the numbers to the left of the index and the
 * sum of all the numbers to the right of the index, if the sums of both sides are equal return which index
 * number it is, if the sums are not equal or there is less than 3 numbers in the array return -1
 * @param {Array<Numbers>} nums an array of numbers
 * @returns {Boolean} true or false
 */
function balanceIndex(nums) {
  sumLeft = 0;
  sumRight = 0;
  if (nums.length < 3) {
    return -1;
  }
  for (i = 1; i < nums.length - 1; i++) {
    for (j = 0; j < i; j++) {
      sumLeft = sumLeft + nums[j];
    }
    for (j = nums.length - 1; j > i; j--) {
      sumRight = sumRight + nums[j];
    }
    if (sumLeft === sumRight) {
      return i;
    } else {
      sumLeft = 0;
      sumRight = 0;
    }
  }
  return -1;
}

console.log(balanceIndex(BalArr1));
console.log(balanceIndex(BalArr2));
console.log(balanceIndex(BalArr3));
console.log(balanceIndex(BalArr4));
console.log(balanceIndex(BalArr5));
