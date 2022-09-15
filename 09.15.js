//from 05.11.js

const sides1 = 6;
const sides2 = 20;

/**
 * given a number for the amount of sides on a dice, use Math.random() and Math.floor() to
 * get a random number for a roll of the dice
 * @param {Number} sides a number for the sides of the dice
 * @returns {Number} the roll of the dice
 */

function dice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}
//this +1 allows you to get the highest number - why?

let playerRoll = dice(sides1);
console.log(`The player rolled ${sides1} sided dice and got: ${playerRoll}`);

playerRoll = dice(sides2);
console.log(`The player rolled ${sides2} sided dice and got: ${playerRoll}`);
