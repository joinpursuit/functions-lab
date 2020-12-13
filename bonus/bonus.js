/**
 * Sum all the arguments passed in, no matter how many there are
 * Hint: look up the `arguments` keyword. This will require you to loop.
 *
 * @param {numbers} this could be any number of parameters, all number type
 * @returns {number} - the sum of all the arguments passed in
 */
function sumAll() {
    let number = 0
    for (let i = 0; i < arguments.length; i++ ){
      number += arguments[i]
    }
      return number
  }

/**
 * Average all the arguments passed in, no matter how many there are
 * Hint: look up the `arguments` keyword. This will require you to loop.
 *
 * @param {numbers} this could be any number of parameters, all number type
 * @returns {number} - A whole number the average of all the arguments passed in
 */
function averageAll() {
    let num = 0;
    for (let x = 0; x < arguments.length; x++ ){
      num += arguments[x];
    }
    let y = num / arguments.length;
    return Math.round(y);
}

/**
 * Flip the sign of the number passed in.
 * E.g. if 5 is passed in, return -5
 * If -12 is passed in, return 12
 * Hint: you can do this with simple math
 *
 * @param {number} n - the number to be flipped.
 * @returns {number} - The opposite value of n
 */
function flipSign(n) {
    return -n
}

module.exports = {
  sumAll,
  averageAll,
  flipSign,
}
