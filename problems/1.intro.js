/**
 * Console logs the string "hello world"
 * 
 * @returns undefined
 */

const helloWorld = ()=> {
  console.log("hello world");
}


/**
 * Console logs the string "hello ${name}"
 * 
 * @param {string} name - the name to be added to the console log 
 * @returns undefined
 */
const  helloName= (name) => {
  console.log("hello " + name)

}

/**
 * Returns the string "hello world"
 * 
 * @returns {string} - the string "hello world"
 */
const returnHelloWorld = () => {
  return "hello world"
}

/**
 * Returns the string "Hello ${name}!"
 * Hint: note the capitalization and !
 * 
 * @param {string} name - the name to added to the return string
 * @returns {string} A greeting in the form of "Hello ${name}!"
 */
const returnHelloName = (name) => {
  return ("Hello " + name + "!")
}

module.exports = {
  helloWorld,
  helloName,
  returnHelloWorld,
  returnHelloName
}