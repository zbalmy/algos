const smallest1 = [34, 15, 88, 2];
// const expected = 2

const smallest2 = [34, -345, -1, 100];
// const expected = -345

/**
 * given an array of numbers, return the smallest value in the array
 * @param {Array<Numbers>} args an array of numbers
 * @returns {Number} the smallest number in the array
 */
function findSmallestInt(args) {
  let min = args[0];
  for (i = 0; i < args.length; i++) {
    if (min > args[i]) {
      min = args[i];
      //console.log(min);
    }
  }
  return min;
}

console.log(findSmallestInt(smallest1));
console.log(findSmallestInt(smallest2));
