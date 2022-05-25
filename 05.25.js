const decodeStr1 = "a3b2c1d3";
// const expected = "aaabbcddd";

const decodeStr2 = "a3b2c12d10";
// const expected = "aaabbccccccccccccdddddddddd";

/**
 * given an encoded string, return a string where each letter is repeated the
 * amount of times of the number that follows it
 * @param {String} str an encoded string
 * @returns {String} a decoded string
 */
function decode(str) {
  newStr = "";
  for (i = 0; i < str.length; i++) {
    for (j = 1; j <= str[i]; j++) {
      newStr = newStr + str[i - 1];
    }
  }
  return newStr;
}

console.log(decode(decodeStr1));
console.log(decode(decodeStr2));

function decode2(str) {
  let decoded = "";
  let char;
  let numStr = "";
  for (let i = 0; i < str.length; i++) {
    char = str[i];
    while (!isNaN(str[i + 1])) {
      i++;
      numStr += str[i];
    }
    decoded += char.repeat(numStr);
    numStr = "";
  }
  return decoded;
}

console.log(decode2(decodeStr1));
console.log(decode2(decodeStr2));
