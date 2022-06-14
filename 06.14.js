const rotateStrA1 = "ABCD";
const rotateStrB1 = "CDAB";
// const expected = true;

const rotateStrA2 = "ABCD";
const rotateStrB2 = "CDBA";
// const expected = false;

const rotateStrA3 = "ABCD";
const rotateStrB3 = "BCDAB";
// const expected = false

function rotateStr(str, amnt) {
  expected = "";
  if (amnt > str.length) {
    amnt = amnt - str.length;
    // amnt -= str.length
  }
  for (i = str.length - 1; i >= str.length - amnt; i--) {
    expected = str[i] + expected;
  }
  for (i = 0; i < str.length - amnt; i++) {
    expected = expected + str[i];
    // expected += str[i]
  }
  return expected;
}

/**
 * given two strings, return whether the strings are rotations of each other or not
 * @param {String} s1 first string
 * @param {String} s2 second string
 * @returns {Boolean} true or false
 */
function isRotation(s1, s2) {
  for (let i = 1; i <= s1.length; i++) {
    rotated = rotateStr(s1, i);
    if (rotated === s2) {
      return true;
    }
  }
  return false;
}

console.log(isRotation(rotateStrA1, rotateStrB1));
console.log(isRotation(rotateStrA2, rotateStrB2));
console.log(isRotation(rotateStrA3, rotateStrB3));
