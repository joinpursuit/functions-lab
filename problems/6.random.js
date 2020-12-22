/** 
 * Returns a random number
 * Hint: Look up Math.random()
 * 
 * @returns {number} - a random number between 0 and 1
 * 
 */
// function rand() {
//   return Math.random()
// }

const rand = () => {
  return Math.random()
}

/** 
 * Returns a rounded, random number between 1 and 6, like rolling a die
 * 
 * @returns {number} - A random number greater than 1 and less than 6
 */
// function diceRoll() {

// }

const diceRoll = (minNum = 1, maxNum = 6) => {
  return Math.round(Math.random() * (maxNum - minNum) + minNum) 
}



/**
 * Returns a rounded, random number between 0 and n
 * 
 * @param {number} n - A number that serves as the upper limit of random
 * @returns {number} - A random number betweeen 0 and n
 */
// function randRange(minNum = 0, maxNum = 3) {
//   return Math.round(Math.random() * (maxNum - minNum) + minNum)
// }

const randRange = (minNum = 0, maxNum = 3) => {
  return Math.round(Math.random() * (maxNum - minNum) + minNum)
}

/**
 * Returns four
 * https://xkcd.com/221/
 * 
 * @returns {number} - the number 4. don't overthink it.
 */
// function totallyFairDiceRoll() { // We didn't over think this.
//   return 4
// }

const totallyFairDiceRoll = () => {
  return 4
}




module.exports = {
  rand,
  randRange,
  diceRoll,
  totallyFairDiceRoll
}