const { defaultNum, defaultStr } = require('../problems/7.defaults')

describe("7. defaultNum", () => {
  test("does not return undefined", () => {
    expect(defaultNum()).toBeDefined()
    expect(defaultNum(55)).toBeDefined()
  })
  test("returns a number", () => {
    expect(typeof defaultNum()).toEqual('number')
    expect(typeof defaultNum(88)).toEqual('number')
  })
  test("returns the correct answer", () => {
    expect(defaultNum()).toBe(5)
    expect(defaultNum(859)).toBe(859)
  })
})

describe("7. defaultStr", () => {
  test("does not return undefined", () => {
    expect(defaultStr()).toBeDefined()
    expect(defaultStr("what")).toBeDefined()
  })
  test("returns a number", () => {
    expect(typeof defaultStr()).toEqual('string')
    expect(typeof defaultStr("haha")).toEqual('string')
  })
  test("returns the correct answer", () => {
    expect(defaultStr()).toBe("hello world")
    expect(defaultStr("fandango")).toBe("fandango")
  })
})
