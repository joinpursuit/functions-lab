const {
  rand,
  randRange,
  diceRoll,
  totallyFairDiceRoll,
} = require("../problems/6.random")

describe("6. rand", () => {
  beforeEach(() => {
    let mockRand = jest.spyOn(Math, "random").mockReturnValue(0.12345)
  })
  afterEach(() => {
    jest.spyOn(Math, "random").mockRestore()
  })
  test("does not return undefined", () => {
    expect(rand()).toBeDefined()
  })
  test("returns a random number", () => {
    expect(rand()).toEqual(0.12345)
  })
})

describe("6. diceRoll", () => {
  test("does not return undefined", () => {
    expect(diceRoll()).toBeDefined()
  })
  test("returns a whole number", () => {
    expect(Number.isInteger(diceRoll())).toBe(true)
  })
  test("returns the correct answer", () => {
    let randNums = []
    for (let i = 0; i < 100; i++) {
      randNums.push(diceRoll())
    }
    const checkNums = () => {
      return randNums.some((n) => {
        return n > 1 && n < 6
      })
    }
    expect(checkNums()).toBe(true)
  })
})

describe("6. randRange", () => {
  test("does not return undefined", () => {
    expect(randRange(19)).toBeDefined()
  })
  test("returns a whole number", () => {
    let randNums = []

    for (let i = 0; i < 100; i++) {
      randNums.push(randRange(10))
    }
    const checkInt = () => {
      return randNums.some((n) => Number.isInteger(n))
    }

    expect(checkInt()).toBe(true)
  })
  test("returns the correct answer", () => {
    let randNums = []
    let randNums2 = []
    let firstCeil = 4
    let secondCeil = 20
    for (let i = 0; i < 100; i++) {
      randNums.push(randRange(firstCeil))
      randNums2.push(randRange(secondCeil))
    }
    const checkNums = (ceil, arr) => {
      return arr.some((n) => {
        return n >= 0 && n < ceil
      })
    }
    expect(checkNums(firstCeil, randNums)).toBe(true)
    expect(checkNums(secondCeil, randNums2)).toBe(true)
  })
})

describe("6. totallyFairDiceRoll", () => {
  test("does not return undefined", () => {
    expect(totallyFairDiceRoll()).toBeDefined()
  })
  test("returns 4", () => {
    expect(totallyFairDiceRoll()).toBe(4)
  })
})
