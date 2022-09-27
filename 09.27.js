//from 05.26.js

const pal1 = "a x a";
// const expected = true;

const pal2 = "racecar";
// const expected = true;

const pal3 = "Dud";
// const expected = false;

const pal4 = "oho!";
// const expected = false;

/**
 * given a string, return whether or not the string is a palindrome
 * @param {String} str a string
 * @returns {Boolean} true or false
 */

//iterate through (for loop)
//if
function isPalindrome(str) {
  j = str.length - 1;
  for (i = 0; i <= str.length / 2; i++) {
    if (str[i] != str[j]) {
      return false;
    }
    j--;
  }
  return true;
}

console.log(isPalindrome(pal1));
console.log(isPalindrome(pal2));
console.log(isPalindrome(pal3));
console.log(isPalindrome(pal4));
