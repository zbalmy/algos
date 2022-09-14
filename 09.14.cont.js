// const maxMinAvg1 = [0, 2, 4];
// //const expected = [4, 0, 2]

// const maxMinAvg2 = [1, 5, 10, -2];
// //const expected = [10, -2, 3.5]

// const maxMinAvg3 = [0];
// //const expected = [0, 0, 0]

// /**
//  * given an array of numbers, return an array with the maximum, minimum, and average
//  * numbers of the given array
//  * @param {Array<Numbers>} arr an array of numbers
//  * @returns {Array<Numbers>} an array with the max, min, and avg numbers
//  */

// function maxMinAvg(arr) {
//   let maxNum = arr[0];
//   let minNum = arr[0];
//   let sum = 0;
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] > maxNum) {
//       //store maxNum
//       maxNum = arr[i];
//     }
//     if (arr[i] < minNum) {
//       //store minNum
//       minNum = arr[i];
//     }
//     sum = sum + arr[i];
//   }
//   //return maxNum
//   //return minNum
//   //return average
//   return [maxNum, minNum, sum / arr.length];
// }

// console.log(maxMinAvg(maxMinAvg1));
// console.log(maxMinAvg(maxMinAvg2));
// // console.log(maxMinAvg(maxMinAvg3));

// // //************************************************************************ */
// const swapArr1 = [0, 2, 4];
// // //const expected = [4, 2, 0]

// const swapArr2 = [1, 5, 10, -2];
// // //const expected = [-2, 5, 10, 1]

// const swapArr3 = [10, 20];
// // //const expected = [20, 10]

// // /**
// //  * given an array, return an array with the first and last values swapped
// //  * @param {Array<Numbers>} arr an array of numbers
// //  * @returns {Array<Numbers>} an array with the first and last values swapped
// //  */

// function swap(arr) {
//   temp = arr[0];
//   arr[0] = arr[arr.length - 1];
//   arr[arr.length - 1] = temp;
//   return arr;
// }

// console.log(swap(swapArr1));
// console.log(swap(swapArr2));
// console.log(swap(swapArr3));

// //*********************************************************************** */
const numToStrArr1 = [-1, -3, 2];
const numToStr1 = "Hello";
// // const expected = ["Hello", "Hello", 2]

const numToStrArr2 = [0];
const numToStr2 = "World";
// // const expected = [0]

const numToStrArr3 = [-2, 3, -1];
const numToStr3 = "Algos";
// // const expected = ["Algos", 3, "Algos"]

// /**
//  * given an array of numbers and a string, return an array with all the negative
//  * values changed into the given string
//  * @param {Array<Numbers>} arr an array of numbers
//  * @param {String} str a string
//  * @returns {Array<Any>} an array of numbers and strings
//  */

function numToStr(arr, str) {
  newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      newArr.push(arr[i]);
    } else {
      newArr.push(str);
    }
  }
  return newArr;
}

console.log(numToStr(numToStrArr1, numToStr1));
console.log(numToStr(numToStrArr2, numToStr2));
console.log(numToStr(numToStrArr3, numToStr3));
