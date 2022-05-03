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
