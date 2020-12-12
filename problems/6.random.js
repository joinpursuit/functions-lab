/** 
 * Returns a random number
 * Hint: Look up Math.random()
 * 
 * @returns {number} - a random number between 0 and 1
 * 
 */
const rand = () => {
  return Math.random(0, 1);
}

/** 
 * Returns a rounded, random number between 1 and 6, like rolling a die
 * 
 * @returns {number} - A random number greater than 1 and less than 6
 */
const diceRoll = () => {
  return Math.round(Math.random() * 5 + 1);
}

/**
 * Returns a rounded, random number between 0 and n
 * 
 * @param {number} n - A number that serves as the upper limit of random
 * @returns {number} - A random number betweeen 0 and n
 */
const randRange = (n) => {
  return Math.round(Math.random() * n);
}



/**
 * Returns four
 * https://xkcd.com/221/
 * 
 * @returns {number} - the number 4. don't overthink it.
 */
const totallyFairDiceRoll = () => {
  return 4;
}

module.exports = {
  rand,
  randRange,
  diceRoll,
  totallyFairDiceRoll
}