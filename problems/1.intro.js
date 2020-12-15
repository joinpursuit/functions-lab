/**
 * Console logs the string "hello world"
 * 
 * @returns undefined
 */
function helloWorld(hello) {
  console.log("hello world")

}


/**
 * Console logs the string "hello ${name}"
 * 
 * @param {string} name - the name to be added to the console log 
 * @returns undefined
 */
function helloName(name = 'name') {
  console.log('hello ${name}')

}

/**
 * Returns the string "hello world"
 * 
 * @returns {string} - the string "hello world"
 */
function returnHelloWorld() {
  return "hello world"

}

/**
 * Returns the string "Hello ${name}!"
 * Hint: note the capitalization and !
 * 
 * @param {string} name - the name to added to the return string
 * @returns {string} A greeting in the form of "Hello ${name}!"
 */
function returnHelloName(name = "Dave") {
  return 'Hello ${name}!'

}
returnHelloName(name)

module.exports = {
  helloWorld,
  helloName,
  returnHelloWorld,
  returnHelloName
}