/**
 * Takes in two values and returns their sum

 * @param {number} a - The first number to add.
 * @param {number} b - The second number to add.
 * @returns {number} - Equal to the sum of a and b
 */
a = 1
b = 2
function sum(a,b) { 
 return a + b
}

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

/**
 * Subtracts two numbers
 * 
 * @param {number} a - the first number
 * @param {number} b - the second number which is subtracted from the first
 * @returns {number} - Equal to a minus b
 */
a = 10
b = 6
function subtract(a,b) {
 -b = a - b
}


module.exports = {
  sum,
  sumThree,
  subtract
};
