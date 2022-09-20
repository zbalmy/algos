//from 05.24.js

const encodeStr1 = "aaaabbcddd";
// const expected = "a4b2c1d3";

const encodeStr2 = "";
// const expected = "";

const encodeStr3 = "a";
// const expected = "a";

const encodeStr4 = "bbcc";
// const expected = "bbcc";

/**
 * given a string with letters repeating, return an encoded string where the
 * letter is followed by how many times that letter repeated,
 * if the length of the encoded string is longer than or the same length as the
 * original string, return the original string
 * @param {String} str a string of repeating letters
 * @returns {string} an encoded string
 */

//pseudo code
//loop through the string
//if the next index from the current index is the same, increase the count
//store the index + the count

function encodeStr(str) {
  newStr = "";
  for (i = 0; i < str.length; i++) {
    count = 1;
    while (str[i] === str[i + 1]) {
      count++;
      i++;
    }
    newStr = newStr + str[i] + count;
  }
  if (newStr.length >= str.length) {
    return str;
  }
  return newStr;
}
console.log(encodeStr(encodeStr1));
console.log(encodeStr(encodeStr2));
console.log(encodeStr(encodeStr3));
console.log(encodeStr(encodeStr4));
