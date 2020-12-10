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
    expect(sumThree(1,2,3)).toBeDefined()
    expect(sumThree(9,9,9)).toBeDefined()
  })

  test("returns a number", () => {
    expect(typeof sumThree(100, 5, 1)).toBe('number')
    expect(typeof sumThree(1, 1, 1)).toBe('number')
  })

  test('returns the correct answer', () => {
    expect(sumThree(9,9,9)).toBe(27)
    expect(sumThree(8, 1, 2)).toBe(11)
  })
})

describe("2. subtract", () => {
  test("does not return undefined", () => {
    expect(subtract(2, 1)).toBeDefined()
    expect(subtract(100, 100)).toBeDefined()
  })
  
  test("returns a number", () => {
    expect(typeof subtract(100, 100)).toBe('number')
    expect(typeof subtract(99, 10)).toBe('number')
  })

  test('returns the correct answer', () => {
    expect(subtract(2, 1)).toBe(1)
    expect(subtract(1024, 512)).toBe(512)
  })
})