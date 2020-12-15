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
function bothNumbers(num1, num2) {
  let a = true
  let b = true
  return a && b;
}



/**
 * Checks to see if either parameter is a number
 * 
 * @param {number} a - the first number parameter
 * @param {number} b - the second number parameter
 * @returns {boolean} - return true if either a or b are a number
 * 
 */
function eitherNumber(num1, num2 = 2) {
 console.log( num1 && num2 || num2 && num1 );
}

/**
 * Checks to see if both numbers are equal
 * 
 * @param {number} a - The first number to test
 * @param {number} b - The second number to test
 * @returns {boolean} - If a and b are equal then return true, otherwise return false
 */
function numbersEqual(num1, num2) {
    return num1 + num2 == num2 + num1
}

/**
 * Checks to see if both numbers are not equal
 * 
 * @param {number} a - The first number to test
 * @param {number} b - The second number to test
 * @returns {boolean} - If a and b are not equal then return true, otherwise return false
 */
function numbersNotEqual() {

}

/**
 * Checks to see if both numbers are even
 * Hint: look up the modulo operator (%)
 * 
 * @param {number} a - The first number to test
 * @param {number} b - The second number to test
 * @returns {boolean} - If a and b are both even numbers, return true
 */
function bothEven(num1, num2) {
return num1 % 10 || num2 %10;
}

/**
 * Checks to see if both numbers are odd 
 * 
 * @param {number} a - The first number to test
 * @param {number} b - The second number to test
 * @returns {boolean} - If a and b are both odd numbers, return true
 */
function bothOdd(num1, num2) {
   return (num1 == Math.odds()) || (num2 == Math.odds())
}

/**
 * Checks to see if either number is even
 * 
 * @param {number} a - The first number to test
 * @param {number} b - The second number to test
 * @returns {boolean} - If either a or b is even, return true
 */
function eitherEven() {

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