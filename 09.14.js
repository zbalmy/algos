// const squareArr1 = [1, 2, 3];
// //const expected = [1, 4, 9]

// const squareArr2 = [-1, 3, 6];
// //const expected = [1, 9, 36]

// const squareArr3 = [0];
// //const expected = [0]

// /**
//  * given an array of numbers, return an array with all the numbers squared in the
//  * same order
//  * @param {Array<Numbers>} arr an array of numbers
//  * @returns {Array<Numbers>} an array of all the numbers squared
//  */

// function squareVal(arr) {
//   newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i] * arr[i]);
//   }
//   return newArr;
// }

// console.log(squareVal(squareArr1));
// console.log(squareVal(squareArr2));
// console.log(squareVal(squareArr3));

/************************************************************************ */

const negArr1 = [1, 2, -3, 3];
//const expected = [1, 2, 0, 3]

const negArr2 = [-1, 3, 6];
//const expected = [0, 3, 6]

const negArr3 = [0];
//const expected = [0]

/**
 * given an array of numbers, return the array with all of the negative values
 * changed to 0
 * @param {Array<Numbers>} arr an array of numbers
 * @returns {Array<Numbers>} an array with no negative values
 */

function noNeg(arr) {
  newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      newArr.push(arr[i]);
    } else newArr.push(0);
  }
  return newArr;
}

console.log(noNeg(negArr1));
console.log(noNeg(negArr2));
console.log(noNeg(negArr3));
