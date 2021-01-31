/** 
 * Returns a random number
 * Hint: Look up Math.random()
 * 
 * @returns {number} - a random number between 0 and 1
 * 
 */
function rand(max) {
return Math.floor(Math.random() * Math.floor(max))
}
console.log(rand(3))
/** 
 * Returns a rounded, random number between 1 and 6, like rolling a die
 * 
 * @returns {number} - A random number greater than 1 and less than 6
 */
function diceRoll(min, max) {
  return Math.floor(Math.random() *(max - min + 1)) + min;
  let n = max;
}

console.log(diceRoll(1,6))

/**
 * Returns a rounded, random number between 0 and n
 * 
 * @param {number} n - A number that serves as the upper limit of random
 * @returns {number} - A random number betweeen 0 and n
 */
function randRange(min, max) {
    return Math.floor(Math.random() *(max - min + 1)) + min;
    
}
let n = 100; 
console.log(randRange(1,n))



/**
 * Returns four
 * https://xkcd.com/221/
 * 
 * @returns {number} - the number 4. don't overthink it.
 */
function totallyFairDiceRoll() {
return 4;
}
console.log(totallyFairDiceRoll())

module.exports = {
  rand,
  randRange,
  diceRoll,
  totallyFairDiceRoll
}