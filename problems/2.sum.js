/**
 * Takes in two values and returns their sum

 * @param {number} a - The first number to add.
 * @param {number} b - The second number to add.
 * @returns {number} - Equal to the sum of a and b
 */
function sum(a,b) {
  
  // let a = 5
  // let b = 10

  return a +b

}

console.log(sum(5,10))

/**
 * Takes in three values and returns their sum

 * @param {number} a - The first number to add.
 * @param {number} b - The second number to add.
 * @param {number} c - The third number to add.
 * @returns {number} - Equal to the sum of a, b and c
 */
function sumThree(a,b,c) {

  return a + b + c

}

console.log(sumThree(2,3,4))

/**
 * Subtracts two numbers
 * 
 * @param {number} a - the first number
 * @param {number} b - the second number which is subtracted from the first
 * @returns {number} - Equal to a minus b
 */
function subtract(a,b) {
   return a - b
}

console.log(subtract(20,3))

module.exports = {
  sum,
  sumThree,
  subtract
};
