/**
 * Doubles whatever number is passed in
 * 
 * @param {number} n - a number to be doubled
 * @returns {number} - Equal to n multiplied by 2
 */
function double(n) {
  return n * 2;
}
console.log(double(8))
/**
 * Squares whatever number is passed in
 * 
 * @param {number} n - a number to be squared
 * @returns {number} - Equal to n times itself
 */
function square(n) {
  return Math.pow(n,2);
}
console.log(square(16))
/**
 * Multiplies two numbers that are passed in
 * 
 * @param {number} a - The first number to multiply
 * @param {number} b - The second number to multiply
 * @returns {number} - The result of a times b
 */
function multiplyTwo(a,b) {
  return a * b;
}
console.log(multiplyTwo(5,6))
/**
 * Multiplies three numbers that are passed in
 * 
 * @param {number} a - The first number to multiply
 * @param {number} b - The second number to multiply
 * @param {number} c - The third number to multiply
 * @returns {number} - The result of a times b times c
 */
function multiplyThree(a,b,c) {
  return a * b * c;
}
console.log(multiplyThree(7,8,9))
/**
 * Multiplies a number and a string together
 * 
 * @param {string} str - A string containing any value
 * @param {number} n - A number of any value
 * @returns {NaN} - Should return NaN (not a number) since this is an invalid operation in Javascript
 */
function multiplyString(str,n) {
  return str * n
}
console.log(multiplyString("habit",10))

module.exports = {
  double,
  square,
  multiplyTwo,
  multiplyThree,
  multiplyString
}
