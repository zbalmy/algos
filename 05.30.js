const palSubStr1 = "what up, daddy-o?";
// const expected = "dad";

const palSubStr2 = "uh, not much";
// const expected = "u";

const palSubStr3 = "Yikes! my favorite racecar erupted!";
// const expected = "e racecar e";

const palSubStr4 = "a1001x20002y5677765z";
// const expected = "5677765";

const palSubStr5 = "a1001x20002y567765z";
// const expected = "567765";

// function isPalindrome(str) {
//   j = str.length - 1;
//   for (i = 0; i <= str.length / 2; i++) {
//     if (str[i] != str[j]) {
//       return false;
//     }
//     j--;
//   }
//   return true;
// }

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

/**
 * given a string, return the longest substring that is a palindrome
 * @param {String} str a string
 * @returns {String} the longest palindrome in the string
 */
function longestPalindromicSubstring(str) {
  tempStr = "";
  subStr = "";
  //i is checking where the substring starts, j is the character that we add to the substring
  for (i = 0; i < str.length; i++) {
    for (j = i; j < str.length; j++) {
      tempStr += str[j];
      if (isPalindrome(tempStr) && tempStr.length > subStr.length) {
        subStr = tempStr;
      }
    }
    tempStr = "";
  }
  return subStr;
}

console.log(longestPalindromicSubstring(palSubStr1));
console.log(longestPalindromicSubstring(palSubStr2));
console.log(longestPalindromicSubstring(palSubStr3));
console.log(longestPalindromicSubstring(palSubStr4));
console.log(longestPalindromicSubstring(palSubStr5));
