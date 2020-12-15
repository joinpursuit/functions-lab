/**
 * Takes in two values and returns their sum

 * @param {number} a - The first number to add.
 * @param {number} b - The second number to add.
 * @returns {number} - Equal to the sum of a and b
 */
function sum(a,b) {
  let numSum = a + b;
  return numSum

}

/**
 * Takes in three values and returns their sum

 * @param {number} a - The first number to add.
 * @param {number} b - The second number to add.
 * @param {number} c - The third number to add.
 * @returns {number} - Equal to the sum of a, b and c
 */
function sumThree(a,b,c) {
    let numSumThree = a + b + c
    return numSumThree 
  
}

/**
 * Subtracts two numbers
 * 
 * @param {number} a - the first number
 * @param {number} b - the second number which is subtracted from the first
 * @returns {number} - Equal to a minus b
 */
function subtract(num1, num2) {
  let subNum = num1 - num2;
  return subNum


}


module.exports = {
  sum,
  sumThree,
  subtract
};
