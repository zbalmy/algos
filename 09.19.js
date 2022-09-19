//from 05.23.js

const pages = [1, 13, 14, 15, 37, 38, 70];
// const expected = "1, 13-15, 37-38, 70";

/**
 * given an array of numbers, return a string of numbers with all consecutive
 * numbers displayed as a range with a "-"
 * @param {Array<Numbers>} nums an array of numbers
 * @returns {String} a string of page numbers
 */
//loop through
//if the next number is the current number + 1 then you second loop to find the last number of the consecutive numbers
//add the beginning and end of consecutive numbers with a "-"
//then move to the next number

function bookIndex(nums) {
  newStr = "";
  for (i = 0; i < nums.length; i++) {
    if (nums[i + 1] === nums[i] + 1) {
      j = i;
      while (nums[j + 1] === nums[j] + 1) {
        j++;
      }
      newStr = newStr + nums[i] + "-" + nums[j];
      i = j;
    } else {
      newStr = newStr + nums[i];
    }
    if (i != nums.length - 1) {
      newStr = newStr + ",";
    }
  }
  return newStr;
}

console.log(bookIndex(pages));
