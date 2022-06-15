const queue1 = [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1];
// const expected = false;

const queue2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
// const expected = true;

const queue3 = [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
// const expected = false;

/**
 * given an array of numbers, return whether or not there are at least six
 * 0's(feet) in between each set of 1's(people)
 * @param {Array<0|1>} arr a queue
 * @returns {Boolean} true or false
 */
function socialDistancingEnforcer(arr) {
  let count = 0;
  let seen = false;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      count++;
    }
    if (arr[i] === 1) {
      if (count < 6 && seen === true) {
        return false;
      }
      count = 0;
      seen = true;
    }
  }
  return true;
}

console.log(socialDistancingEnforcer(queue1));
console.log(socialDistancingEnforcer(queue2));
console.log(socialDistancingEnforcer(queue3));
