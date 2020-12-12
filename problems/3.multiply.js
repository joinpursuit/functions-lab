/**
 * Doubles whatever number is passed in
 * 
 * @param {number} n - a number to be doubled
 * @returns {number} - Equal to n multiplied by 2
 */
const double = (n) => {
  return n * 2;
}

/**
 * Squares whatever number is passed in
 * 
 * @param {number} n - a number to be squared
 * @returns {number} - Equal to n times itself
 */
const square = (n) => {
  return n * n

}

/**
 * Multiplies two numbers that are passed in
 * 
 * @param {number} a - The first number to multiply
 * @param {number} b - The second number to multiply
 * @returns {number} - The result of a times b
 */
const multiplyTwo = (a, b) =>{
  return a * b;

}

/**
 * Multiplies three numbers that are passed in
 * 
 * @param {number} a - The first number to multiply
 * @param {number} b - The second number to multiply
 * @param {number} c - The third number to multiply
 * @returns {number} - The result of a times b times c
 */
const multiplyThree = (a, b, c) => {
  return a * b * c;
  
}

/**
 * Multiplies a number and a string together
 * 
 * @param {string} str - A string containing any value
 * @param {number} n - A number of any value
 * @returns {NaN} - Should return NaN (not a number) since this is an invalid operation in Javascript
 */
const multiplyString = (str, n) => {
  str="string"
  return "str" * n;
}

module.exports = {
  double,
  square,
  multiplyTwo,
  multiplyThree,
  multiplyString
}
