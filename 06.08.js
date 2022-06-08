const words1 = "hello";
// const expected = "olleh";

const words2 = "hello world";
// const expected = "olleh dlrow";

const words3 = "abc def ghi";
// const expected = "cba fed ihg";

/**
 * given a string of words, return a string with the words reversed without
 * changing the position of the word in the string
 * @param {String} str a string of words
 * @returns {String} a string with words reversed
 */
function reverseWords(str) {
  let newStr = "";
  let words = str.split(" ");
  let arr = [];
  // console.log(words)
  for (let word of words) {
    //console.log(word)
    for (i = 0; i < word.length; i++) {
      newStr = word[i] + newStr;
    }
    arr.push(newStr);
    newStr = "";
  }
  return arr.join(" ");
}

console.log(reverseWords(words1));
console.log(reverseWords(words2));
console.log(reverseWords(words3));
