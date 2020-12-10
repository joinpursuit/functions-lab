const { helloWorld, helloName, returnHelloName, returnHelloWorld } = require("./../problems/1.intro.js")

describe("1. log helloWorld", () => {
  test("Outputs the right answer", ()=> {
    let spy = jest.spyOn(console, 'log')

    helloWorld()

    expect(spy.mock.calls[0][0]).toEqual('hello world')
  })
})

describe("1. log helloName", () => {
  test("Outputs the right answer", ()=> {
    let spy = jest.spyOn(console, 'log')
    
    helloName("brandy")
    helloName("jamal")
    
    expect(spy).toHaveBeenCalledWith('hello brandy')
    expect(spy).toHaveBeenCalledWith('hello jamal')
  })
})

describe("1. return helloWorld", () => {
  test("Returns a string", () => {
    expect(typeof returnHelloWorld()).toEqual('string')
  })
  test("Returns the correct string", () => {
    expect(returnHelloWorld()).toEqual('hello world')
  })
})

describe("1. return helloName", () => {
  test("Returns a string", () => {
    expect(returnHelloName()).toBeDefined()
    expect(typeof returnHelloName("James")).toBe('string')
  })

  test("Returns the correct string", () => {
    expect(returnHelloName("Anne")).toBe("Hello Anne!")
    expect(returnHelloName("Jamal")).toBe("Hello Jamal!")
  })
})