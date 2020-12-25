/**
 * Sum all the arguments passed in, no matter how many there are
 * Hint: look up the `arguments` keyword. This will require you to loop.
 *
 * @param {numbers} this could be any number of parameters, all number type
 * @returns {number} - the sum of all the arguments passed in
 */
function sumAll() {
  let totalSum = 0
  for (let i=0; i<arguments.length; i++) {
    totalSum += arguments[i] 
  }
  return totalSum
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
  let totalSum = 0
  for (let x=0; x<arguments.length; x++) {
    totalSum += arguments[x] 
  }
  return Math.round(totalSum/arguments.length)
}
console.log(averageAll(1,2,3,4,5))

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
  return (n * -1)
}

console.log(flipSign(-3))

module.exports = {
  sumAll,
  averageAll,
  flipSign,
}
