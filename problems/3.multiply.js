/**
 * Doubles whatever number is passed in
 * 
 * @param {number} n - a number to be doubled
 * @returns {number} - Equal to n multiplied by 2
 */
const double = num1 => {
  return num1 * 2
}

/**
 * Squares whatever number is passed in
 * 
 * @param {number} n - a number to be squared
 * @returns {number} - Equal to n times itself
 */
const square = num1 => {
  return num1 * num1
}

/**
 * Multiplies two numbers that are passed in
 * 
 * @param {number} a - The first number to multiply
 * @param {number} b - The second number to multiply
 * @returns {number} - The result of a times b
 */
const multiplyTwo = (num1, num2) => {
  return num1 * num2
}

/**
 * Multiplies three numbers that are passed in
 * 
 * @param {number} a - The first number to multiply
 * @param {number} b - The second number to multiply
 * @param {number} c - The third number to multiply
 * @returns {number} - The result of a times b times c
 */
const multiplyThree = (num1, num2, num3) => {
  return num1 * num2 * num3
}

/**
 * Multiplies a number and a string together
 * 
 * @param {string} str - A string containing any value
 * @param {number} n - A number of any value
 * @returns {NaN} - Should return NaN (not a number) since this is an invalid operation in Javascript
 */
const multiplyString = (str, num1) => {
  return str * num1
}

module.exports = {
  double,
  square,
  multiplyTwo,
  multiplyThree,
  multiplyString
}
