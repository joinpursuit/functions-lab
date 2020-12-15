/**
 * Console logs the string "hello world"
 * 
 * @returns undefined
 */
function helloWorld() {
  console.log("hello world")

}
helloWorld()

/**
 * Console logs the string "hello ${name}"
 * 
 * @param {string} name - the name to be added to the console log 
 * @returns undefined
 */
function helloName(name) {
  console.log ("hello " + name) 

}

helloName("Jamee")

/**
 * Returns the string "hello world"
 * 
 * @returns {string} - the string "hello world"
 */
function returnHelloWorld() {
  return "hello world"

}
let helloWorld1 = returnHelloWorld()

console.log(helloWorld1)

/**
 * Returns the string "Hello ${name}!"
 * Hint: note the capitalization and !
 * 
 * @param {string} name - the name to added to the return string
 * @returns {string} A greeting in the form of "Hello ${name}!"
 */
function returnHelloName(name1) {
  return greet + name1 + ex

}
let greet = "Hello "
let ex = "!" 
let greeting = returnHelloName("Jamee")
console.log(greeting )

module.exports = {
  helloWorld,
  helloName,
  returnHelloWorld,
  returnHelloName
}