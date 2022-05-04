const arrNum1 = 255;
//const expected = [1, 2, 3, ... , 253, 254, 255]

const arrNum2 = 100;
//const expected = [1, 2, 3, ... , 98, 99, 100]

/**
 * given a number, return an array of all numbers from 1 to given number
 * @param {Number} num the number to stop at
 * @returns {Array<Numbers>} an array of all numbers from 1 to given number
 */
function get_array(num) {
  let i = 1;
  let newArr = [];
  while (i <= num) {
    newArr.push(i);
    i++;
  }
  return newArr;
}

console.log(get_array(arrNum1));
console.log(get_array(arrNum2));

//**********************************************************************************************

let evenLowSum1 = 1;
const evenHighSum1 = 1000;
//const expected = 250500

let evenLowSum2 = 15;
const evenHighSum2 = 150;
//const expected = 5644

/**
 * given two numbers, return the sum of all even numbers between the two numbers
 * @param {Number} low the lower limit of numbers
 * @param {Number} high the upper limit of numbers
 * @returns {Number} the sum of all the even numbers from low number to high number
 */
function sum_even_numbers(low, high) {
  let sum = 0;
  while (low <= high) {
    if (low % 2 == 0) {
      sum = sum + low;
    }
    low++;
  }
  return sum;
}

console.log(sum_even_numbers(evenLowSum1, evenHighSum1));
console.log(sum_even_numbers(evenLowSum2, evenHighSum2));
