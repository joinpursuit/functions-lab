const average = require("./../problems/average.js")

describe("Average of two values", () => {
  test("Average does not return undefined", () => {
    expect(average(5, 10)).toBeDefined()
    expect(average(60, 10)).toBeDefined()
  })

  test("Average returns a whole number", () => {
    let half = average(-100, 101)
    let whole = average(20, 40)
    expect(Number.isInteger(half)).toBe(true)
    expect(Number.isInteger(whole)).toBe(true)
  })

  test("Average returns the correct answer", () => {
    expect(average(4, 10)).toBe(7)
    expect(average(100, 200)).toBe(150)
    expect(average(-100, 101)).toBe(1)
  })
})
