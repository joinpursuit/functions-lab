/**
 * Doubles whatever number is passed in
 * 
 * @param {number} n - a number to be doubled
 * @returns {number} - Equal to n multiplied by 2
 */
function double(n = 5) {
 return n * 2
}
console.log(double())
/**
 * Squares whatever number is passed in
 * 
 * @param {number} n - a number to be squared
 * @returns {number} - Equal to n times itself
 */
function square(n = 5) {
return n*n
}
console.log(square())
/**
 * Multiplies two numbers that are passed in
 * 
 * @param {number} a - The first number to multiply
 * @param {number} b - The second number to multiply
 * @returns {number} - The result of a times b
 */
function multiplyTwo(a= 6, b=3) {
return a * b 
}
console.log(multiplyTwo())
/**
 * Multiplies three numbers that are passed in
 * 
 * @param {number} a - The first number to multiply
 * @param {number} b - The second number to multiply
 * @param {number} c - The third number to multiply
 * @returns {number} - The result of a times b times c
 */
function multiplyThree(a= 3, b= 4, c =7) {
  return a * b * c
}
console.log(multiplyThree())
/**
 * Multiplies a number and a string together
 * 
 * @param {string} str - A string containing any value
 * @param {number} n - A number of any value
 * @returns {NaN} - Should return NaN (not a number) since this is an invalid operation in Javascript
 */
function multiplyString(n= 12, str = "this string") {
return n * str
}
console.log(multiplyString())
module.exports = {
  double,
  square,
  multiplyTwo,
  multiplyThree,
  multiplyString
}
