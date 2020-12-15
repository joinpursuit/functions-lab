/**
 * Takes in two values and returns their sum

 * @param {number} a - The first number to add.
 * @param {number} b - The second number to add.
 * @returns {number} - Equal to the sum of a and b
 */
function sum(number) {
let a = 7
let b = 5
  return (a + b) 

}
console.log(sum())
/**
 * Takes in three values and returns their sum

 * @param {number} a - The first number to add.
 * @param {number} b - The second number to add.
 * @param {number} c - The third number to add.
 * @returns {number} - Equal to the sum of a, b and c
 */
function sumThree(number) {
let a = 14
let b = 13
let c = 1
  return (a + b + c) 
}
sumThree()
/**
 * Subtracts two numbers
 * 
 * @param {number} a - the first number
 * @param {number} b - the second number which is subtracted from the first
 * @returns {number} - Equal to a minus b
 */
function subtract(number) {
let a = 15
let b = 10
  return a - b 
}

subtract()

module.exports = {
  sum,
  sumThree,
  subtract
};
