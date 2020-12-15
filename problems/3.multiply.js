/**
 * Doubles whatever number is passed in
 * 
 * @param {number} n - a number to be doubled
 * @returns {number} - Equal to n multiplied by 2
 */
function double(n) {
return n * 2
}
console.log(double(5))

/**
 * Squares whatever number is passed in
 * 
 * @param {number} n - a number to be squared
 * @returns {number} - Equal to n times itself
 */
function square(n = 5) {
return n * n
}
console.log(square(5)) 

/**
 * Multiplies two numbers that are passed in
 * 
 * @param {number} a - The first number to multiply
 * @param {number} b - The second number to multiply
 * @returns {number} - The result of a times b
 */
function multiplyTwo(d,c) {
return d * c
}
console.log(multiplyTwo(10,10))

/**
 * Multiplies three numbers that are passed in
 * 
 * @param {number} a - The first number to multiply
 * @param {number} b - The second number to multiply
 * @param {number} c - The third number to multiply
 * @returns {number} - The result of a times b times c
 */
function multiplyThree(e,f,g) {
  return e * f * g
}
console.log(multiplyThree(10,10,10))

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
console.log(multiplyString("yes ",1))

module.exports = {
  double,
  square,
  multiplyTwo,
  multiplyThree,
  multiplyString
}
