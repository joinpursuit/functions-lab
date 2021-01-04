/**
 * Console logs the string "hello world"
 * 
 * @returns undefined
 */
let helloWorld;
 console.log(helloWorld);
//I have been studying on codecademy, I solved the first problem right :) but could not run the test :( will retry.

//function helloWorld () {
//let intro = "hello world"
//console.log(intro)
//}
//helloWorld ()

/**
 * Console logs the string "hello ${name}"
 * 
 * @param {string} name - the name to be added to the console log 
 * @returns undefined
 */
function helloName() {
  let name = 'Myra'
  console.log('hello ' + name)
}
helloName()
/**
 * Returns the string "hello world"
 * 
 * @returns {string} - the string "hello world"
 */
function returnHelloWorld() {
return 'Hello World'
}
let greet = returnHelloWorld()
console.log(greet)

/**
 * Returns the string "Hello ${name}!"
 * Hint: note the capitalization and !
 * 
 * @param {string} name - the name to added to the return string
 * @returns {string} A greeting in the form of "Hello ${name}!"
 */
let greeting = 'hello '
function returnHelloName(name) {
return greeting + nameGreet
}

let nameGreet = helloName('Jordan')
console.log(nameGreet)

module.exports = {
  helloWorld,
  helloName,
  returnHelloWorld,
  returnHelloName
}