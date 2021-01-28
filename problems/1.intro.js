/**
 * Console logs the string "hello world"
 * 
 * @returns undefined
 */
function helloWorld() {

  let hello = 'hello world' //console log 'hello world
  console.log(hello)

}

//returns undefined as there is no return statement

/**
 * Console logs the string "hello ${name}"
 * 
 * @param {string} name - the name to be added to the console log 
 * @returns undefined
 */
function helloName(name) {

  let person = `${name}` //placeholder for name
  console.log('hello ' + person) //returning hello plus placehold var

}



/**
 * Returns the string "hello world"
 * 
 * @returns {string} - the string "hello world"
 */
function returnHelloWorld() {
  return 'hello world' //returning hello world and producing a new value
}

let greeting = returnHelloWorld() //capturing the value and storing in a variable
console.log(greeting)

/**
 * Returns the string "Hello ${name}!"
 * Hint: note the capitalization and !
 * 
 * @param {string} name - the name to added to the return string
 * @returns {string} A greeting in the form of "Hello ****${name}!"****
 */

//note use ${name}! - variable 

let greet = 'Hello' //global scrop variable

function returnHelloName(name) {
  return greet + " " + name + "!"
}

let addedName = `${name}`
let namedGreet = returnHelloName(addedName)
console.log(namedGreet)


module.exports = {
  helloWorld,
  helloName,
  returnHelloWorld,
  returnHelloName
}