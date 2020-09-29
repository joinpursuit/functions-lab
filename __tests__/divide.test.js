const {
  divideTwo,
  divideTwoRound,
  divideByZero,
  divideByString,
} = require("../problems/4.divide")

describe("4. divideTwo", () => {
  test("does not return undefined", () => {
    expect(divideTwo(5, 2)).toBeDefined()
    expect(divideTwo(1, 2)).toBeDefined()
  })
  test("returns a number", () => {
    expect(typeof divideTwo(5, 2)).toEqual('number')
    expect(typeof divideTwo(55,11)).toEqual('number')
  })
  test("returns the correct answer", () => {
    expect(divideTwo(10, 6)).toBeCloseTo(1.66, 1)
    expect(divideTwo(33, 2)).toEqual(16.5)
  })
})

describe("4. divideTwoRound", () => {
  test("does not return undefined", () => {
    expect(divideTwoRound(5, 2)).toBeDefined()
    expect(divideTwoRound(1, 2)).toBeDefined()
  })
  test("returns a whole number", () => {
    expect(Number.isInteger(divideTwoRound(10, 3))).toBe(true)
    expect(Number.isInteger(divideTwoRound(1, 2))).toBe(true)
  })
  test("returns the correct answer", () => {
    expect(divideTwoRound(5, 2)).toBe(3)
    expect(divideTwoRound(100, 3)).toBe(33)
  })
})

describe("4. divideByZero", () => {
  test("does not return undefined", () => {
    expect(divideByZero(15)).toBeDefined()
    expect(divideByZero(1)).toBeDefined()
  })
  test("returns the correct answer", () => {
    expect(divideByZero(5)).toBe(Infinity)
    expect(divideByZero(0)).toBe(Infinity)
  })
})

describe("4. divideByString", () => {
  test("does not return undefined", () => {
    expect(divideByString('wat', 5)).toBeDefined()
    expect(divideByString('ok', 2222)).toBeDefined()
  })
  test("returns the correct answer", () => {
    expect(divideByString('hello', 549)).toBeNaN()
    expect(divideByString('another', 0)).toBeNaN()
  })
})
