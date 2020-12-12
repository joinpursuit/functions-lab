/**
 * Sum all the arguments passed in, no matter how many there are
 * Hint: look up the `arguments` keyword. This will require you to loop.
 *
 * @param {numbers} this could be any number of parameters, all number type
 * @returns {number} - the sum of all the arguments passed in
 */
function sumAll(numbers) {
  let n = arguments.lenth - 1; // find how many numbers total to add 3 (5, 7,10)
  let sum = arguments[0]; //give sum the value of the first number sum = 5
  
  for (n > 0 ;// loop the amount of times [2 loops -- amount of numbers -1]
    sum = arguments[n - 1];
     //5 + 7 = 12
    n--) // count down to next loop 
    numbers = sum;
    return numbers;
}

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
function flipSign() {

}

module.exports = {
  sumAll,
  averageAll,
  flipSign,
}
