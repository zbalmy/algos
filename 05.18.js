const revStr1 = "creature";
// const expected = "erutaerc";

const revStr2 = "dog";
// const expected = "god";

/**
 * given a string, return the string reversed
 * @param {String} str a string
 * @returns {String} the reversed string
 */
function reverseString(str) {
  newStr = "";
  for (i = 0; i < str.length; i++) {
    newStr = str[i] + newStr;
  }
  return newStr;
}

console.log(reverseString(revStr1));
console.log(reverseString(revStr2));
//********************************************************************* */

const separatorArr1 = [1, 2, 3];
const separator1 = ", ";
// const expected = "1, 2, 3";

const separatorArr2 = [1, 2, 3];
const separator2 = "-";
// const expected = "1-2-3";

const separatorArr3 = [1, 2, 3];
const separator3 = " - ";
// const expected = "1 - 2 - 3";

const separatorArr4 = [1];
const separator4 = ", ";
// const expected = "1";

const separatorArr5 = [];
const separator5 = ", ";
// const expected = "";

/**
 * given an array of numbers and a string for the separator, return a string of
 * the numbers separated by the given separator
 * @param {Array<Numbers>} arr an array of numbers
 * @param {String} separator a string
 * @returns {String} a string
 */
function join(arr, separator) {
  newStr = "";
  for (i = 0; i < arr.length; i++) {
    if (arr.length - 1 === i) {
      newStr = newStr + arr[i];
      //break is a possibility instead of using else
    } else {
      newStr = newStr + arr[i] + separator;
    }
  }
  return newStr;
}

console.log(join(separatorArr1, separator1));
console.log(join(separatorArr2, separator2));
console.log(join(separatorArr3, separator3));
console.log(join(separatorArr4, separator4));
console.log(join(separatorArr5, separator5));
ß;
