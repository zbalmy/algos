//from 05.17.js

const arr2d = [
  [2, 5, 8],
  [3, 6, 1],
  [5, 7, 7],
];
const search2d1 = 1;
// const expected = true

const search2d2 = 5;
// const expected = true

const search2d3 = 4;
// const expected = false

/**
 * given an array of arrays and a search number, return true if the number is
 * in any of the arrays, false if not
 * @param {Array<Arrays>} arr an array of arrays
 * @param {Number} value search number
 * @returns {Boolean} true of false
 */

function isPresent(arr, value) {
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === value) {
        return true;
      }
    }
  }
  return false;
}
console.log(isPresent(arr2d, search2d1));
console.log(isPresent(arr2d, search2d2));
console.log(isPresent(arr2d, search2d3));

//******************************************************************* */

const acrStr1 = " there's no free lunch - gotta pay yer way.";
// const expected = "TNFL-GPYW";

const acrStr2 = "Live from New York, it's Saturday Night!";
// const expected = "LFNYISN";

/**
 * given a string, return the string as an uppercase acronym
 * <<< .split() and .toUpperCase() will be useful >>>
 * @param {String} str a string
 * @returns {String} a acronym string
 */
function acronymize(str) {
  arr = str.split(" ");
  newStr = "";
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == "") {
      continue;
    }
    newStr += arr[i][0].toUpperCase();
    console.log(newStr);
  }
  return newStr;
}

console.log(acronymize(acrStr1));
console.log(acronymize(acrStr2));
