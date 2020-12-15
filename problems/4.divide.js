/** 
 * Divides two numbers
 * 
 * @param {number} a - The first number
 * @param {number} b - The second number, to be divided by
 * @returns {number} - Equal to a divided by b
 */
function divideTwo(a= 8, b= 2) {
return a/b
}
console.log(divideTwo())
/**
 * Divides two numbers and returns the rounded result
 * Hint: Look up Math.round()
 * 
 * @param {number} a - The first number
 * @param {number} b - The second number, to be divided by
 * @returns {number} - A whole number equal to a divided by b
 */
function divideTwoRound(a= 7, b= 9) {
return Math.round((a/b))
}
console.log(divideTwoRound())
/** 
 * Divides a number by zero
 * 
 * @param {number} n - Any number
 * @returns {Infinity} - Equal to Infinity
*/
function divideByZero(n= 5) {
return Infinity
}
console.log(divideByZero())
/**
 * Divides a number by a string
 * 
 * @param {string} str - A string with any value
 * @param {number} n - A number with any value
 * @returns {NaN} - Not a Number, since this is an invalid operation in JavaScript
 */

function divideByString(str = "this is", n = 7) {
return str/n
}
console.log(divideByString())

module.exports = {
  divideTwo,
  divideTwoRound,
  divideByZero,
  divideByString
}