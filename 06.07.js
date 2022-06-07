const dedupeStr1 = "abcABC";
// const expected = "abcABC";

const dedupeStr2 = "helloo";
// const expected = "helo";

const dedupeStr3 = "wednesday";
// const expected = "wednsay"
// const expectedBonus = "wnesday"

/**
 * given a string, return a string with all of the duplicate letters removed
 * @param {String} str a string
 * @returns {String} a string
 */
function stringDedupe(str) {
  let freq = {};
  let expected = "";
  for (let i = 0; i < str.length; i++) {
    if (freq[str[i]]) {
      // continue;
      freq[str[i]]++;
    } else {
      freq[str[i]] = 1;
    }
  }
  for (let key in freq) {
    expected += key;
    //expected = expected + key;
  }
  return expected;
}

/**
 * given a string, return a string with only the last occurence of each letter
 * @param {String} str a string
 * @returns {String} a string
 */
function stringDedupeBonus(str) {
  let freq = {};
  let expected = "";
  for (let i = str.length - 1; i >= 0; i--) {
    if (freq[str[i]]) {
      freq[str[i]]++;
    } else {
      freq[str[i]] = 1;
    }
  }
  for (let key in freq) {
    expected = key + expected;
  }
  return expected;
}

// function stringDedupeBonus(str) {
//     let newObj = {};
//     let newStr = "";
//     for(let x = 0; x < str.length; x++){
//         if(newObj[str[x]]){
//             delete newObj[str[x]];
//             newObj[str[x]] = 1;
//         }else{
//             newObj[str[x]] = 1;
//         }
//     }
//     for(y in newObj){
//         newStr += y;
//     }
//     return newStr
// }

console.log(stringDedupe(dedupeStr1));
console.log(stringDedupe(dedupeStr2));
console.log(stringDedupe(dedupeStr3));
console.log(stringDedupeBonus(dedupeStr3));
