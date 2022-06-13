const rotate = "Hello World";

const rotateAmnt1 = 0;
// const expected = "Hello World";

const rotateAmnt2 = 1;
// const expected = "dHello Worl";

const rotateAmnt3 = 2;
// const expected = "ldHello Wor";

const rotateAmnt4 = 4;
// const expected = "orldHello W";

const rotateAmnt5 = 13;
// const expected = "ldHello Wor";

/**
 * given a string and a number, rotate the string 1 letter the amount of
 * times of the number
 * @param {String} str string to be rotated
 * @param {Number} amnt times to rotate
 * @returns {String} string after rotating
 */
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

console.log(rotateStr(rotate, rotateAmnt1));
console.log(rotateStr(rotate, rotateAmnt2));
console.log(rotateStr(rotate, rotateAmnt3));
console.log(rotateStr(rotate, rotateAmnt4));
console.log(rotateStr(rotate, rotateAmnt5));
