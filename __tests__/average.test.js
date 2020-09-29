const { average, averageThree } = require("../problems/5.average.js")

describe("5. average", () => {
  test("does not return undefined", () => {
    expect(average(5, 10)).toBeDefined()
    expect(average(60, 10)).toBeDefined()
  })

  test("returns a whole number", () => {
    let half = average(-100, 101)
    let whole = average(20, 40)
    expect(Number.isInteger(half)).toBe(true)
    expect(Number.isInteger(whole)).toBe(true)
  })

  test("returns the correct answer", () => {
    expect(average(4, 10)).toBe(7)
    expect(average(100, 200)).toBe(150)
    expect(average(-100, 101)).toBe(1)
  })
})

describe("5. averageThree", () => {
  test("does not return undefined", () => {
    expect(averageThree(5, 10, 20)).toBeDefined()
    expect(averageThree(60, 10, 10)).toBeDefined()
  })

  test("returns a whole number", () => {
    let half = averageThree(-100, 101, 5)
    let whole = averageThree(20, 40, 60)
    expect(Number.isInteger(half)).toBe(true)
    expect(Number.isInteger(whole)).toBe(true)
  })

  test("returns the correct answer", () => {
    expect(averageThree(4, 10, 10)).toBe(8)
    expect(averageThree(100, 200, 300)).toBe(200)
    expect(averageThree(-100, 100, 0)).toBe(0)
  })
})
