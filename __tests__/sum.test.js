const { sum, sumThree, subtract } = require("./../problems/2.sum.js")

describe("2. sum", () => {
  test('does not return undefined', () => {
    expect(sum(5, 5)).toBeDefined()
    expect(sum(100, 5)).toBeDefined()
  })

  test('returns a number', () => {
    expect(typeof sum(100, 5)).toBe('number')
    expect(typeof sum(-20, 51)).toBe('number')
  })

  test('returns the correct answer', () => {
    expect(sum(1,2)).toBe(3)
    expect(sum(66, 33)).toBe(99)
    expect(sum(-122, 558)).toBe(436)
  })
  
})

describe("2. sumThree", () => {
  test("does not return undefined", () => {

  })

  test("returns a number", () => {

  })

  test('returns the correct answer', () => {

  })

})

describe("2. subtract", () => {
  test("does not return undefined", () => {

  })
  
  test("returns a number", () => {

  })

  test('returns the correct answer', () => {

  })


})