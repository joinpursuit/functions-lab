const greeting = require("./../problems/greeting.js")

test('greet Anne', () => {
  expect(greeting("Anne")).toBe("Hello Anne!")
})
