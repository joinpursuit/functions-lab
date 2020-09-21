const greeting = require("./../problems/greeting.js")

describe("Greeting tests", () => {

  test("Returns a string", () => {
    expect(greeting()).toBeDefined()
    expect(typeof greeting("James")).toBe('string')
  })

  test("Returns the correct string", () => {
    expect(greeting("Anne")).toBe("Hello Anne!")
    expect(greeting("Jamal")).toBe("Hello Jamal!")
  })

})