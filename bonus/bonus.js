/**
 * Sum all the arguments passed in, no matter how many there are
 * Hint: look up the `arguments` keyword. This will require you to loop.
 *
 * @param {numbers} this could be any number of parameters, all number type
 * @returns {number} - the sum of all the arguments passed in
 */
function sumAll() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++){
      sum += arguments[i] 
      console.log(arguments[i])
  }
  return sum 
}
console.log(sumAll(1,2,3,4,5,6))


/**
 * Average all the arguments passed in, no matter how many there are
 * Hint: look up the `arguments` keyword. This will require you to loop.
 *
 * @param {numbers} this could be any number of parameters, all number type
 * @returns {number} - A whole number the average of all the arguments passed in
 */
function averageAll() {

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
  return n * (-1)
}

module.exports = {
  sumAll,
  averageAll,
  flipSign,
}
