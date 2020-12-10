/**
 * Console logs the string "hello world"
 * 
 * @returns undefined
 */
function helloWorld() {
  let intro = 'hello world'
  console.log(intro)
}
helloWorld()

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
  return 'hello world'
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
let greeting = 'Hello '

function returnHelloName(name) {
  return greeting + name +"!"
}

// returnHelloName("Nora")
let inputName = `${name}!`
let nameGreet = returnHelloName(inputName)
console.log(nameGreet)

module.exports = {
  helloWorld,
  helloName,
  returnHelloWorld,
  returnHelloName
}