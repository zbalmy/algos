const braces1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
// const expected = true;

const braces2 = "D(i{a}l[ t]o)n{e";
// const expected = false;

const braces3 = "A(1)s[O (n]0{t) 0}k";
// const expected = false;

/**
 * given a string containing braces, return whether the braces are valid or not
 * @param {String} str a string with braces
 * @returns {Boolean} true or false
 */
function bracesValid(str) {
  let arr = [];
  let removed;
  for (i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      arr.push("(");
    } else if (str[i] === ")") {
      removed = arr.pop();
      if (removed != "(") {
        return false;
      }
    }
    if (str[i] === "[") {
      arr.push("[");
    } else if (str[i] === "]") {
      removed = arr.pop();
      if (removed != "[") {
        return false;
      }
    }
    if (str[i] === "{") {
      arr.push("{");
    } else if (str[i] === "}") {
      removed = arr.pop();
      if (removed != "{") {
        return false;
      }
    }
  }
  if (arr.length < 1) {
    return true;
  } else {
    return false;
  }
}

console.log(bracesValid(braces1));
console.log(bracesValid(braces2));
console.log(bracesValid(braces3));
