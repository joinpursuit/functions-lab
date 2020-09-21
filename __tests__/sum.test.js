const sum = require("./../problems/sum.js")

describe("Sum tests", () => {
  test('Sum does not return undefined', () => {
    expect(sum(5, 5)).toBeDefined()
    expect(sum(100, 5)).toBeDefined()
  })

  test('Sum returns a number', () => {
    expect(typeof sum(100, 5)).toBe('number')
    expect(typeof sum(-20, 51)).toBe('number')
  })

  test('Sum returns the correct answer', () => {
    expect(sum(1,2)).toBe(3)
    expect(sum(66, 33)).toBe(99)
    expect(sum(-122, 558)).toBe(436)
  })
  
})