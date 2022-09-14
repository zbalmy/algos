const arrY1 = [1, 2, 5];
const Y1 = 1;
//const expected = 2

const arrY2 = [1, 3, 5, 7, 20];
const Y2 = 12;
//const expected = 1

const arrY3 = [-1];
const Y3 = 0;
//const expected = 0

/**
 * given an array of numbers and a search number, return how many numbers inside
 * an array are greater than the search number
 * @param {Array<Numbers>} arr an array of numbers
 * @param {Number} Y the search number
 * @returns {Number} the amount of numbers in the array that are greater than the
 * search number
 */

function greaterY(arr, Y) {
  count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > Y) {
      count++;
    }
  }
  return count;
}

console.log(greaterY(arrY1, Y1));
console.log(greaterY(arrY2, Y2));
console.log(greaterY(arrY3, Y3));
