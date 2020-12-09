/**
 * Console logs the string "hello world"
 * 
 * @returns undefined
 */
function helloWorld() {
  console.log("hello world")
}

console.log(helloWorld())

/**
 * Console logs the string "hello ${name}"
 * 
 * @param {string} name - the name to be added to the console log 
 * @returns undefined
 */
function helloName(name) {
  //let name = "tey"
  //"hello $" + name 
}

console.log(helloName())

/**
 * Returns the string "hello world"
 * 
 * @returns {string} - the string "hello world"
 */
function returnHelloWorld() {
  console.log("hello world")
}

returnHelloWorld()

/**
 * Returns the string "Hello ${name}!"
 * Hint: note the capitalization and !
 * 
 * @param {string} name - the name to added to the return string
 * @returns {string} A greeting in the form of "Hello ${name}!"
 */

function returnHelloName(name) {
    console.log("Hello $" + name +"!" )
}

returnHelloName("tey")

module.exports = {
  helloWorld,
  helloName,
  returnHelloWorld,
  returnHelloName
}