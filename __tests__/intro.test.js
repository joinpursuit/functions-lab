const { helloWorld, helloName, returnHelloName, returnHelloWorld } = require("./../problems/1.intro.js")

describe("1. Hello World", () => {

  test("Returns a string", () => {
    expect(helloWorld()).toBeDefined()
    expect(typeof helloWorld("James")).toBe('string')
  })

  test("Returns the correct string", () => {
    expect(helloWorld("Anne")).toBe("Hello Anne!")
    expect(helloWorld("Jamal")).toBe("Hello Jamal!")
  })
})

describe("1. Hello name", () => {

})

describe("1. return hello world", () => {
  
})

describe("1. return hello name", () => {
  
})