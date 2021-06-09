/** 
 * Divides two numbers
 * 
 * @param {number} a - The first number
 * @param {number} b - The second number, to be divided by
 * @returns {number} - Equal to a divided by b
 */
function divideTwo(a,b) {
  return a / b
}
console.log(divideTwo(4,2))

/**
 * Divides two numbers and returns the rounded result
 * Hint: Look up Math.round()
 * 
 * @param {number} a - The first number
 * @param {number} b - The second number, to be divided by
 * @returns {number} - A whole number equal to a divided by b
 */
function divideTwoRound(a,b) {
  return Math.round(a/b)
}

/** 
 * Divides a number by zero
 * 
 * @param {number} n - Any number
 * @returns {Infinity} - Equal to Infinity
*/
function divideByZero(n) {
  return n/0
}

/**
 * Divides a number by a string
 * 
 * @param {string} str - A string with any value
 * @param {number} n - A number with any value
 * @returns {NaN} - Not a Number, since this is an invalid operation in JavaScript
 */

function divideByString(str, n) {
  return n/str
}


module.exports = {
  divideTwo,
  divideTwoRound,
  divideByZero,
  divideByString
}