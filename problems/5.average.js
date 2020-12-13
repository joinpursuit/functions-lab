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
function average(num1, num2) {
let avgNum = (num1 + num2) / 2;
let wholeNum = Math.round(avgNum);
return(wholeNum)
}

/**
 * Takes in three values and returns their rounded average
 * 
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @param {number} c - The third number
 * @returns {number} - A whole number equal to the average of a and b and c
 */
function averageThree(num1, num2, num3) {
  let avgNum = (num1 + num2 + num3) / 3;
  let avgRound = Math.round(avgNum)
  return (avgRound)

}


module.exports = {
  average,
  averageThree
};
