/**
 * In this set of problems, you should rely on logical operators to solve the puzzles.
 * Do not use if/else statements
 * 
 * Logical operators are:
 * && (and)
 * || (or)
 * ! (not)
 * === (equals)
 * !== (does not equal)
 */

/**
 * Verifies that all the parameters passed in are numbers
 * 
 * @param {number} a - the first number 
 * @param {number} b - the second number
 * @returns {boolean} - if a and b are both number types, return true
 */
function bothNumbers(a , b) {
  return typeof a === "number" && typeof b === "number"

}

/**
 * Checks to see if either parameter is a number
 * 
 * @param {number} a - the first number parameter
 * @param {number} b - the second number parameter
 * @returns {boolean} - return true if either a or b are a number
 * 
 */
function eitherNumber(a , b) {
  return typeof a === "number" || typeof b === "number"


}

/**
 * Checks to see if both numbers are equal
 * 
 * @param {number} a - The first number to test
 * @param {number} b - The second number to test
 * @returns {boolean} - If a and b are equal then return true, otherwise return false
 */
function numbersEqual(a , b ) {
return a === b

}

/**
 * Checks to see if both numbers are not equal
 * 
 * @param {number} a - The first number to test
 * @param {number} b - The second number to test
 * @returns {boolean} - If a and b are not equal then return true, otherwise return false
 */
function numbersNotEqual(a , b ) {
  return a !== b

}

/**
 * Checks to see if both numbers are even
 * Hint: look up the modulo operator (%)
 * 
 * @param {number} a - The first number to test
 * @param {number} b - The second number to test
 * @returns {boolean} - If a and b are both even numbers, return true
 */
function bothEven(a , b) {
  return (a % 2 === 0 ) && (b % 2 === 0 )

}

/**
 * Checks to see if both numbers are odd 
 * 
 * @param {number} a - The first number to test
 * @param {number} b - The second number to test
 * @returns {boolean} - If a and b are both odd numbers, return true
 */
function bothOdd(a , b) {
  return ( a % 2 !== 0) && ( b % 2 !== 0)
  
}

/**
 * Checks to see if either number is even
 * 
 * @param {number} a - The first number to test
 * @param {number} b - The second number to test
 * @returns {boolean} - If either a or b is even, return true
 */
function eitherEven(a , b) {
  return a % 2 === 0 || b % 2 === 0

}

module.exports = {
  bothNumbers,
  eitherNumber,
  numbersEqual,
  numbersNotEqual,
  bothEven,
  bothOdd,
  eitherEven
}