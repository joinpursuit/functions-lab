/**
 * Console logs the string "hello world"
 * 
 * @returns undefined
 */
function helloWorld() {
    console.log("Hello World")
}
helloWorld()


/**
 * Console logs the string "hello ${name}"
 * 
 * @param {string} name - the name to be added to the console log 
 * @returns undefined
 */
function helloName(name) {
   console.log("hello"+ name)
}
helloName(" Jarrett")
/**
 * Returns the string "hello world"
 * 
 * @returns {string} - the string "hello world"
 */
function returnHelloWorld(string) {
return ("hello "  +  "World")
}
console.log(returnHelloWorld())
/**
 * Returns the string "Hello ${name}!"
 * Hint: note the capitalization and !
 * 
 * @param {string} name - the name to added to the return string
 * @returns {string} A greeting in the form of "Hello ${name}!"
 */
function returnHelloName(name) {
   return "Hello" + " Anne!"
}
console.log(returnHelloName())


module.exports = {
  helloWorld,
  helloName,
  returnHelloWorld,
  returnHelloName
}