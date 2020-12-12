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
  console.log("hello " + name)
}  
 helloName("David")

/**
 * Returns the string "hello world"
 * 
 * @returns {string} - the string "hello world"
 */
function returnHelloWorld(){
  return "hello world" 
}
returnHelloWorld()
/**
 * Returns the string "Hello ${name}!"
 * Hint: note the capitalization and !
 * 
 * @param {string} name - the name to added to the return string
 * @returns {string} A greeting in the form of "Hello ${name}!"
 */
let greet = "Hello"

 function returnHelloName(name) {
  return greet + "" + name

  }

  let newGreet = returnHelloName("$David!")

console.log(newGreet)

module.exports = {
  helloWorld,
  helloName,
  returnHelloWorld,
  returnHelloName
}