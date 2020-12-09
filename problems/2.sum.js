/**
 * Takes in two values and returns their sum

 * @param {number} a - The first number to add.
 * @param {number} b - The second number to add.
 * @returns {number} - Equal to the sum of a and b
 */
function sum() {
let a = 2
let b = 3
return a + b
}
console.log (sum())
/**
 * Takes in three values and returns their sum

 * @param {number} a - The first number to add.
 * @param {number} b - The second number to add.
 * @param {number} c - The third number to add.
 * @returns {number} - Equal to the sum of a, b and c
 */
function sumThree() {
  let a = 2
  let b = 3
  let c = 4
  return a + b + c
}
console.log (sumThree())
/**
 * Subtracts two numbers
 * 
 * @param {number} a - the first number
 * @param {number} b - the second number which is subtracted from the first
 * @returns {number} - Equal to a minus b
 */
function subtract() {
let firstNumber = 10
let secondNumber = 9
return firstNumber - secondNumber
}
console.log (subtract())


module.exports = {
  sum,
  sumThree,
  subtract
};
