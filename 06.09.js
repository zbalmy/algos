const parens1 = "Y(3(p)p(3)r)s";
// const expected = true;

const parens2 = "N(0(p)3";
// const expected = false;

const parens3 = "N(0)t ) 0(k";
// const expected = false;

const parens4 = "a(b))(c";
// const expected = false;

/**
 * given a string with parenthesis, return whether the parenthesis are valid or not
 * @param {String} str a string with parenthesis
 * @returns {Boolean} true of false
 */
function parensValid(str) {
  count = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      count++;
    } else if (str[i] === ")") {
      count--;
    }
    if (count < 0) {
      return false;
    }
  }
  if (count === 0) {
    return true;
  } else {
    return false;
  }
  // return whether that condition is true or false, more concise way
  // return count === 0
}

console.log(parensValid(parens1));
console.log(parensValid(parens2));
console.log(parensValid(parens3));
console.log(parensValid(parens4));
