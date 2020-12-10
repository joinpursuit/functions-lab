/**
 * Takes in two values and returns their rounded average
 * 
 * Hint: the way to get the average of a set of numbers is
 * to sum all the numbers then divide that sum by how many numbers 
 * you added
 *
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} - A whole number equal to the average of a and b
 */
function average() {
let a = 10
let b = 5
return Math.round((a + b) / 2)
}

console.log(average())

/**
 * Takes in three values and returns their rounded average
 * 
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @param {number} c - The third number
 * @returns {number} - A whole number equal to the average of a and b and c
 */
function averageThree() {
  let a = 25
  let b = 16
  let c = 8
  return Math.round((a + b + c) / 3)
}

console.log(averageThree())

module.exports = {
  average,
  averageThree
};
