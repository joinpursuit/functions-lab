const {
  bothNumbers,
  eitherNumber,
  numbersEqual,
  numbersNotEqual,
  bothEven,
  bothOdd,
  eitherEven,
} = require("../problems/8.types")

describe("8. bothNumbers", () => {
  test("does not return undefined", () => {
    expect(bothNumbers(5, 10)).toBeDefined()
    expect(bothNumbers(55, 30)).toBeDefined()
  })
  test("returns the correct answer", () => {
    expect(bothNumbers(11, 49)).toBe(true)
    expect(bothNumbers("what", 49)).toBe(false)
  })
})

describe("8. eitherNumber", () => {
  test("does not return undefined", () => {
    expect(eitherNumber(19, 12)).toBeDefined()
    expect(eitherNumber(22, 3)).toBeDefined()
  })
  test("returns the correct answer", () => {
    expect(eitherNumber("19", 19)).toBe(true)
    expect(eitherNumber(19, "19")).toBe(true)
    expect(eitherNumber("19", "19")).toBe(false)
  })
})

describe("8. numbersEqual", () => {
  test("does not return undefined", () => {
    expect(numbersEqual(1, 1)).toBeDefined()
    expect(numbersEqual(55, 1)).toBeDefined()
  })
  test("returns the correct answer", () => {
    expect(numbersEqual(5, 5)).toBe(true)
    expect(numbersEqual(1, 5)).toBe(false)
  })
})

describe("8. numbersNotEqual", () => {
  test("does not return undefined", () => {
    expect(numbersNotEqual(1, 1)).toBeDefined()
    expect(numbersNotEqual(5, 2)).toBeDefined()
  })
  test("returns the correct answer", () => {
    expect(numbersNotEqual(5, 2)).toBe(true)
    expect(numbersNotEqual(2, 2)).toBe(false)
  })
})

describe("8. bothEven", () => {
  test("does not return undefined", () => {
    expect(bothEven(4, 2)).toBeDefined()
    expect(bothEven(3, 3)).toBeDefined()
    expect(bothEven(3, 2)).toBeDefined()
  })
  test("returns the correct answer", () => {
    expect(bothEven(3, 2)).toBe(false)
    expect(bothEven(4, 2)).toBe(true)
    expect(bothEven(2, 5)).toBe(false)
    expect(bothEven(3, 5)).toBe(false)
  })
})

describe("8. bothOdd", () => {
  test("does not return undefined", () => {
    expect(bothOdd(4, 2)).toBeDefined()
    expect(bothOdd(4, 3)).toBeDefined()
    expect(bothOdd(3, 1)).toBeDefined()
  })
  test("returns the correct answer", () => {
    expect(bothOdd(3, 2)).toBe(false)
    expect(bothOdd(4, 2)).toBe(false)
    expect(bothOdd(2, 5)).toBe(false)
    expect(bothOdd(3, 5)).toBe(true)
  })
})

describe("8. eitherEven", () => {
  test("does not return undefined", () => {
    expect(eitherEven(4, 2)).toBeDefined()
    expect(eitherEven(5, 2)).toBeDefined()
    expect(eitherEven(5, 3)).toBeDefined()
  })
  test("returns the correct answer", () => {
    expect(eitherEven(1, 2)).toBe(true)
    expect(eitherEven(2, 2)).toBe(true)
    expect(eitherEven(2, 7)).toBe(true)
    expect(eitherEven(7, 2)).toBe(true)
    expect(eitherEven(7, 9)).toBe(false)
  })
})
