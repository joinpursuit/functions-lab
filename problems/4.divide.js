/** 
 * Divides two numbers
 * 
 * @param {number} a - The first number
 * @param {number} b - The second number, to be divided by
 * @returns {number} - Equal to a divided by b
 */
function divideTwo(num1, num2) {
    let divNum = num1 / num2;
    return divNum 
}

/**
 * Divides two numbers and returns the rounded result
 * Hint: Look up Math.round()
 * 
 * @param {number} a - The first number
 * @param {number} b - The second number, to be divided by
 * @returns {number} - A whole number equal to a divided by b
 */
function divideTwoRound(num1, num2) { 
    let divNumRound = Math.round(num1/num2)
    return divNumRound 

}

/** 
 * Divides a number by zero
 * 
 * @param {number} n - Any number
 * @returns {Infinity} - Equal to Infinity
*/
function divideByZero(num) {
    let divZero = num / 0;
    return divZero


}

/**
 * Divides a number by a string
 * 
 * @param {string} str - A string with any value
 * @param {number} n - A number with any value
 * @returns {NaN} - Not a Number, since this is an invalid operation in JavaScript
 */

function divideByString(str = "", num) { 
  let divStrNum = str/num;
  return divStrNum 
  

}


module.exports = {
  divideTwo,
  divideTwoRound,
  divideByZero,
  divideByString
}