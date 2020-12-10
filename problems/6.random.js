/** 
 * Returns a random number
 * Hint: Look up Math.random()
 * 
 * @returns {number} - a random number between 0 and 1
 * 
 */
function rand(a) {
return Math.random(a)
}

console.log(rand())

/** 
 * Returns a rounded, random number between 1 and 6, like rolling a die
 * 
 * @returns {number} - A random number greater than 1 and less than 6
 */
function diceRoll(a) {
  return Math.round(Math.random() * (6 - 1))
}

console.log(diceRoll())

/**
 * Returns a rounded, random number between 0 and n
 * 
 * @param {number} n - A number that serves as the upper limit of random
 * @returns {number} - A random number betweeen 0 and n
 */
function randRange(n = 50) {
return Math.round(Math.random() * (50 - 0))
}

console.log(randRange())


/**
 * Returns four
 * https://xkcd.com/221/
 * 
 * @returns {number} - the number 4. don't overthink it.
 */
function totallyFairDiceRoll() {
return 4
}

console.log(totallyFairDiceRoll())

module.exports = {
  rand,
  randRange,
  diceRoll,
  totallyFairDiceRoll
}