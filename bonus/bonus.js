/**
 * Sum all the arguments passed in, no matter how many there are
 * Hint: look up the `arguments` keyword. This will require you to loop.
 *
 * @param {numbers} this could be any number of parameters, all number type
 * @returns {number} - the sum of all the arguments passed in
 */
   
 //find how many numbers total to add --- 3 (5, 7, 10)
//give sum the value of the first number --- sum = 5
//set the counter to loop amount [2 loops (plus signs needed) -- 5+7+10]
//loop 1 //5 + 7 = 12
//count down to next loop  --- n = n - 1
//loop 2 //12 + 10
//count down to next loop  --- n = n - 1
//return sum

function sumAll() {
  let sum = arguments[0];  
  for  (let counter = arguments.lenth - 1; counter < arguments.length; counter--) { 
    sum = sum + arguments[counter]; // I think this is adding 5 + 10 first
     //sum =+ arguments[counter];
    } 
    //numbers = sum;
    return sum;
} 
// I don't know why it's not working. 
//Don't understand where the number, numbers parameters are supposed to go

/**
 * Average all the arguments passed in, no matter how many there are
 * Hint: look up the `arguments` keyword. This will require you to loop.
 *
 * @param {numbers} this could be any number of parameters, all number type
 * @returns {number} - A whole number the average of all the arguments passed in
 */

//how many numbers
//create a loop to add all the numbers
//need a counter  
//divide sum by amount of numbers
//return average

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
// function flipSign(number) {
//   return -number;
// }
const flipSign = number => -number;

module.exports = {
  sumAll,
  averageAll,
  flipSign,
}
