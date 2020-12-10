/**
 * Console logs the string "hello world"
 * 
 * @returns undefined
 */
 function helloWorld() {
 console.log('hello world')
}

console.log(helloWorld())

/**
 * Console logs the string "hello ${name}"
 * 
 * @param {string} name - the name to be added to the console log 
 * @returns undefined
 */
function helloName(name = "$brandy") {
  console.log("hello " + name)
}
console.log(helloName())

/**
 * Returns the string "hello world"
 * 
 * @returns {string} - the string "hello world"
 */
function returnHelloWorld(string = "hello world") {
     
  return string
  }

returnHelloWorld()

/**
 * Returns the string "Hello ${name}!"
 * Hint: note the capitalization and !
 * 
 * @param {string} name - the name to added to the return string
 * @returns {string} A greeting in the form of "Hello ${name}!"
 */
function returnHelloName(name = "$james") {
  return "Hello " + name + "!"
}

 returnHelloName("james")

module.exports = {
  helloWorld,
  helloName,
  returnHelloWorld,
  returnHelloName
}
