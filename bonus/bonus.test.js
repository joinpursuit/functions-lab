let { sumAll, averageAll, flipSign } = require("./bonus")

describe("Bonus: sumAll", () => {
  test("does not return undefined", () => {
    expect(sumAll(1, 2, 3, 4, 5)).toBeDefined()
    expect(sumAll(5)).toBeDefined()
  })
  test("returns a number", () => {
    expect(typeof sumAll(1, 2, 3, 4, 5)).toEqual("number")
    expect(typeof sumAll(5)).toEqual("number")
  })
  test("returns the correct answer", () => {
    expect(sumAll(1, 2, 3, 4, 5)).toEqual(15)
    expect(sumAll(5)).toEqual(5)
    expect(sumAll(5, 5, 5, 5, 5, 5, 5, 5)).toEqual(40)
  })
})

describe("Bonus: averageAll", () => {
  test("does not return undefined", () => {
    expect(averageAll(1, 2, 3, 4, 5)).toBeDefined()
    expect(averageAll(5)).toBeDefined()
  })
  test("returns a whole number", () => {
    expect(Number.isInteger(averageAll(1, 2, 3, 4, 5))).toBe(true)
    expect(Number.isInteger(averageAll(3, 12, 7, 9))).toBe(true)
  })
  test("returns the correct answer", () => {
    expect(averageAll(3, 12, 7, 9)).toEqual(8)
    expect(averageAll(1, 2, 3, 4, 5)).toEqual(3)
    expect(averageAll(104, 224, 192, 823, 2981, 221, 55)).toEqual(657)
  })
})

describe("Bonus: flipSign", () => {
  test("does not return undefined", () => {
    expect(flipSign(2)).toBeDefined()
    expect(flipSign(-1)).toBeDefined()
  })
  test("returns the correct answer", () => {
    expect(flipSign(50)).toEqual(-50)
    expect(flipSign(-1)).toEqual(1)
    expect(flipSign(-22)).toEqual(22)
  })
})
