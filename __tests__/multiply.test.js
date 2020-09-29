const {
  double,
  square,
  multiplyTwo,
  multiplyThree,
  multiplyString,
} = require("../problems/3.multiply")

describe("3. double", () => {
  test("does not return undefined", () => {
    expect(double(5)).toBeDefined()
    expect(double(-1)).toBeDefined()
  })
  test("returns a number", () => {
    expect(typeof double(11)).toEqual("number")
    expect(typeof double(34827)).toEqual("number")
  })
  test("returns the correct answer", () => {
    expect(double(5)).toEqual(10)
    expect(double(-2)).toEqual(-4)
  })
})

describe("3. square", () => {
  test("does not return undefined", () => {
    expect(square(5)).toBeDefined()
    expect(square(-1)).toBeDefined()
  })
  test("returns a number", () => {
    expect(typeof square(11)).toEqual("number")
    expect(typeof square(99)).toEqual("number")
  })
  test("returns the correct answer", () => {
    expect(square(5)).toBe(25)
    expect(square(-1)).toBe(1)
  })
})

describe("3. multiplyTwo", () => {
  test("does not return undefined", () => {
    expect(multiplyTwo(5, 5)).toBeDefined()
    expect(multiplyTwo(-1, 19)).toBeDefined()
  })
  test("returns a number", () => {
    expect(typeof multiplyTwo(5, 10)).toEqual("number")
    expect(typeof multiplyTwo(145, 11)).toEqual("number")
  })
  test("returns the correct answer", () => {
    expect(multiplyTwo(5, 5)).toBe(25)
    expect(multiplyTwo(-1, 100)).toBe(-100)
  })
})

describe("3. multiplyThree", () => {
  test("does not return undefined", () => {
    expect(multiplyThree(5, 5, 11)).toBeDefined()
    expect(multiplyThree(-1, 19, 11)).toBeDefined()
  })
  test("returns a number", () => {
    expect(typeof multiplyThree(5, 1, 2)).toEqual("number")
    expect(typeof multiplyThree(145, -1, -2)).toEqual("number")
  })
  test("returns the correct answer", () => {
    expect(multiplyThree(5, 5, 5)).toEqual(125)
    expect(multiplyThree(-1, 10, -10)).toEqual(100)
  })
})

describe("3. multiplyString", () => {
  test("does not return undefined", () => {
    expect(multiplyString("hello", 5)).toBeDefined()
    expect(multiplyString("why", 0)).toBeDefined()
  })
  test("returns the correct answer", () => {
    expect(multiplyString("str", 100)).toBeNaN()
    expect(multiplyString("why", 9)).toBeNaN()
  })
})
