/**
 * Doubles whatever number is passed in
 * 
 * @param {number} n - a number to be doubled
 * @returns {number} - Equal to n multiplied by 2
 */
function double(n) {
   let doubleNum = n * 2
   return doubleNum

}

/**
 * Squares whatever number is passed in
 * 
 * @param {number} n - a number to be squared
 * @returns {number} - Equal to n times itself
 */
function square(n) {
    squNum = n * n
 return squNum
}

/**
 * Multiplies two numbers that are passed in
 * 
 * @param {number} a - The first number to multiply
 * @param {number} b - The second number to multiply
 * @returns {number} - The result of a times b
 */
function multiplyTwo(num1,num2) {
    let mulNum = num1 * num2;
    return mulNum

}

/**
 * Multiplies three numbers that are passed in
 * 
 * @param {number} a - The first number to multiply
 * @param {number} b - The second number to multiply
 * @param {number} c - The third number to multiply
 * @returns {number} - The result of a times b times c
 */
function multiplyThree(num1, num2, num3) {
  mulNumThree = num1 * num2 * num3;
  return mulNumThree
  
}

/**
 * Multiplies a number and a string together
 * 
 * @param {string} str - A string containing any value
 * @param {number} n - A number of any value
 * @returns {NaN} - Should return NaN (not a number) since this is an invalid operation in Javascript
 */

function multiplyString(str,num) {
  let string = "hello"
  let strNum = string * num;
  return strNum

}

module.exports = {
  double,
  square,
  multiplyTwo,
  multiplyThree,
  multiplyString
}
