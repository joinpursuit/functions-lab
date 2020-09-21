# Functions Lab

Practice writing code to make tests pass!

## Setup

* Fork this repo
* Clone the forked repository
* `cd` to the directory where you cloned it
* `npm install` to install dependencies
* `npm test` to run the tests

## Directions

This lab is designed to introduce you to the concept of writing code in a specific way, in order to make automated tests pass.

Once you have followed the setup instructions, look in the `problems` folder. 

Each file in the `problems` folder contains a function that you must fill out to make the test pass. Above the function is a description of the function, the parameters it needs, and the return value.

Write your code in the function, then run `npm test` to check your work. When you're first starting out, all the tests will fail.

By default, `npm test` runs every test file, so you will have to scroll up to see all the output. See `Reading the test output` below for more info.

When writing your code, **DO NOT** change the name of the function, the filename, mess with the exports, or else the tests will not work.

## Submission requirements

* When finished, commit your work.
* Make a pull request on github.

If all your tests pass when you run `npm test`, then you should see a notice in the pull request that they all passed. If even one test fails on your computer, it will look like they all failed on github.

## Reading the function description

Here is a sample description and function:

```js
/**
 * Takes in two values and returns their average

 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} - a number equal to the average of a and b
 */

function average() {

}
```

The first line describes, in a plain way, what the function should do.

The params contain the __type__ and the suggested __name__ of the parameters. In this case both are numbers, not strings, arrays, or objects. The first is named `a` and the second named `b`.

The `returns` line describes the __type__ of value that should be returned from the function, and what it should be. So if it says `number` and you return a `string` then the test will fail.

Notice that the function is written without any parameters - you must add them in based on the description!

## Reading the test output

When you run `npm test` you will see something like this:

```
 FAIL  __tests__/sum.test.js
  ● adds 1 + 2 to equal 3

    expect(received).toBe(expected) // Object.is equality

    Expected: 3
    Received: undefined

      2 | 
      3 | test('adds 1 + 2 to equal 3', () => {
    > 4 |   expect(sum(1,2)).toBe(3)
        |                    ^
      5 | })
      6 | 

      at Object.<anonymous> (__tests__/sum.test.js:4:20)

Test Suites: 2 failed, 1 passed, 3 total
```

The first line tells you which test file the message corresponds to. So if the file is named `sum.test.js` then it's probably referring to code you wrote in `sum.js`

The second line is the description of what the test is looking for.

The `Expected` and `Received` lines show what the test was hoping to get, and what it did get back. If it says it received something `undefined` you probably forgot to return inside the function.

Below that, the code shows what the test case does. It literally imports your function and tries to run it - so in this case, it runs `sum(1, 2)` and expects the function to return a 3.

Each test file may contain multiple tests! And each problem file may contain multiple functions, so make sure you read all the test output.
