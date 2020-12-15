/** 
 * Returns a random number
 * Hint: Look up Math.random()
 * 
 * @returns {number} - a random number between 0 and 1
 * 
 */
function rand(randomNum) {
  return Math.random(randomNum)
}

/** 
 * Returns a rounded, random number between 1 and 6, like rolling a die
 * 
 * @returns {number} - A random number greater than 1 and less than 6
 */
function diceRoll(randomNum) {
  return Math.round(Math.random(randomNum)*6)
}

/**
 * Returns a rounded, random number between 0 and n
 * 
 * @param {number} n - A number that serves as the upper limit of random
 * @returns {number} - A random number betweeen 0 and n
 */
function randRange(n) {
  return Math.round(Math.random(n))
}



/**
 * Returns four
 * https://xkcd.com/221/
 * 
 * @returns {number} - the number 4. don't overthink it.
 */
function totallyFairDiceRoll(number) {
  return Number(4)
}

module.exports = {
  rand,
  randRange,
  diceRoll,
  totallyFairDiceRoll
}