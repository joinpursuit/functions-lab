/**
 * Doubles whatever number is passed in
 * 
 * @param {number} n - a number to be doubled
 * @returns {number} - Equal to n multiplied by 2
 */
function double(n) {
n *=2;
return n
}
console.log(double(5))
/**
 * Squares whatever number is passed in
 * 
 * @param {number} n - a number to be squared
 * @returns {number} - Equal to n times itself
 */
function square(n) {
return n*n;
return n
}
console.log(square(10))
/**
 * Multiplies two numbers that are passed in
 * 
 * @param {number} a - The first number to multiply
 * @param {number} b - The second number to multiply
 * @returns {number} - The result of a times b
 */
function multiplyTwo() {
let a = 10
let b = 5
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
function multiplyThree() {
let a = 8
let b = 4
let c = 2
return a * b *c
}
console.log(multiplyThree())

/**
 * Multiplies a number and a string together
 * 
 * @param {string} str - A string containing any value
 * @param {number} n - A number of any value
 * @returns {NaN} - Should return NaN (not a number) since this is an invalid operation in Javascript
 */
function multiplyString() {
let str = 'Jaedin'
n = 5
return str * n
}
console.log(multiplyString())


module.exports = {
  double,
  square,
  multiplyTwo,
  multiplyThree,
  multiplyString
}
