/**
 * Sum all the arguments passed in, no matter how many there are
 * Hint: look up the `arguments` keyword. This will require you to loop.
 *
 * @param {numbers} this could be any number of parameters, all number type
 * @returns {number} - the sum of all the arguments passed in
 */
function sumAll() {
  let totalSum = 0;
  for(let values of arguments) {
    totalSum += values;
  }
  return totalSum;
  //googled and found some code, passed the test, but still not clear about the for loop condition
}

/**
 * Average all the arguments passed in, no matter how many there are
 * Hint: look up the `arguments` keyword. This will require you to loop.
 *
 * @param {numbers} this could be any number of parameters, all number type
 * @returns {number} - A whole number the average of all the arguments passed in
 */
function averageAll() {
    let totalSum = 0;
    let n = 0;
    for(let values of arguments) {
      totalSum += values;
      n++
    }
    return Math.round(totalSum / n);
    //passed the test, but if no argument passed in, I believe it would be divided by 0
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
    return n / -1
}

module.exports = {
  sumAll,
  averageAll,
  flipSign,
}
