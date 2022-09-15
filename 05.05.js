// const avgArr1 = [0, 0, 0];
// //const expected = 0

// const avgArr2 = [1, 3, 5, 7, 20];
// //const expected = 7.2

// const avgArr3 = [-3, 4, 8];
// //const expected = 3

// /**
//  * given an array, return the average of all the numbers inside the array,
//  * the average is the sum of all the numbers divided by the length
//  * @param {Array<Numbers>} arr an array of numbers
//  * @returns {Number} the average of all the numbers in the array
//  */
// function findAvg(arr) {
//   let sum = 0;
//   let avg;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   avg = sum / arr.length;
//   return avg;
// }

// console.log(findAvg(avgArr1));
// console.log(findAvg(avgArr2));
// console.log(findAvg(avgArr3));
//***************************************************************** */

// const oddLow1 = 1;
// const oddHigh1 = 50;
// //const expected = [1, 3, 5, ... , 45, 47, 49]

// const oddLow2 = 5;
// const oddHigh2 = 249;
// //const expected = [5, 7, 9, ... , 245, 247, 249]

// /**
//  * given two numbers, return an array of all the odd numbers between the two given numbers
//  * @param {Number} low the lower limit of numbers
//  * @param {Number} high the upper limit of numbers
//  * @return {Array<Numbers>} an array of all the odd numbers
//  */
// function oddNumbers(low, high) {
//   let newArr = [];
//   while (low <= high) {
//     if (low % 2 == 1) {
//       newArr.push(low);
//     }
//     low++;
//   }
//   return newArr;
// }

// console.log(oddNumbers(oddLow1, oddHigh1));
// console.log(oddNumbers(oddLow2, oddHigh2));
