// const oddLowSum1 = 1;
// const oddHighSum1 = 1000;
// //const expected = 250000

// const oddLowSum2 = 15;
// const oddHighSum2 = 150;
// //const expected = 5576

// /**
//  * given two numbers, return the sum of all odd numbers between the two numbers
//  * @param {Number} low the lower limit of numbers
//  * @param {Number} high the upper limit of numbers
//  * @returns {Number} the sum of all the odd numbers from low number to high number
//  */
// function sum_odd_numbers(low, high) {
//   let sum = 0;
//   while (low <= high) {
//     if (low % 2 == 1) {
//       sum = sum + low;
//     }
//     low++;
//   }
//   return sum;
// }

// console.log(sum_odd_numbers(oddLowSum1, oddHighSum1));
// console.log(sum_odd_numbers(oddLowSum2, oddHighSum2));

//*************************************************************************/

const numArr1 = [0];
//const expected = 0

const numArr2 = [1, 2, 5];
//const expected = 8

const numArr3 = [-5, 2, 5, 12];
//const expected = 14

// /**
//  * given an array of numbers, return the sum of all the numbers in the array
//  * @param {Array<Numbers>} arr an array of numbers
//  * @returns {Number} the sum of all the numbers in the array
//  */
// function iterArr(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }

// console.log(iterArr(numArr1));
// console.log(iterArr(numArr2));
// console.log(iterArr(numArr3));

// //********************************************************************** */
const maxArr1 = [0, -2, 8];
//const expected = 8

const maxArr2 = [300, 2, 200, 5];
//const expected = 300

const maxArr3 = [1];
//const expected = 1

// /**
//  * given an array of numbers, return the highest number value inside the array
//  * @param {Array<Numbers>} arr an array of numbers
//  * @returns {Number} the highest number inside the given array
//  */
function findMax(arr) {
  maxNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    //compare each index to the before
    if (arr[i] > maxNum) {
      //store max number
      maxNum = arr[i];
    }
  }
  return maxNum;
}

console.log(findMax(maxArr1));
console.log(findMax(maxArr2));
console.log(findMax(maxArr3));
