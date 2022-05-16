const lifesAnswers = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes - definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful.",
];

/**
 * given an array of answers, return a random answer from the array
 * @param {Array<Strings>} arr an array of answers
 * @returns {String} the random answer
 */
function Oracle(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

console.log(Oracle(lifesAnswers));
//********************************************************************** */
