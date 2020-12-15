/**
 * Takes in two values and returns their sum

 * @param {number} a - The first number to add.
 * @param {number} b - The second number to add.
 * @returns {number} - Equal to the sum of a and b
 */
function sum(num1,num2) {
return num1 + num2
}
console.log(sum(10,10))

/**
 * Takes in three values and returns their sum

 * @param {number} a - The first number to add.
 * @param {number} b - The second number to add.
 * @param {number} c - The third number to add.
 * @returns {number} - Equal to the sum of a, b and c
 */
function sumThree(x,y,z) {
return x + y + z
}
console.log(sumThree(10,10,10))
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
console.log(subtract(36,24,))

module.exports = {
  sum,
  sumThree,
  subtract
};
