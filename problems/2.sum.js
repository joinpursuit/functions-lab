/**
 * Takes in two values and returns their sum

 * @param {number} a - The first number to add.
 * @param {number} b - The second number to add.
 * @returns {number} - Equal to the sum of a and b
 */
const sum = (num1 , num2) => {
  return num1 + num2
}

/**
 * Takes in three values and returns their sum

 * @param {number} a - The first number to add.
 * @param {number} b - The second number to add.
 * @param {number} c - The third number to add.
 * @returns {number} - Equal to the sum of a, b and c
 */
const sumThree = (num1, num2, num3) => {
  return num1 + num2 + num3
}

/**
 * Subtracts two numbers
 * 
 * @param {number} a - the first number
 * @param {number} b - the second number which is subtracted from the first
 * @returns {number} - Equal to a minus b
 */
const subtract = (num1 , num2) => {
  return num1 - num2
}


module.exports = {
  sum,
  sumThree,
  subtract
};
