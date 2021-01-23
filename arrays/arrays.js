// const animals = ["cats", "dogs", "sheep"];

// // console.log(animals.length)

// // console.log(animals[20])
// // console.log(animals[0])  //0 always returns the first element
// // console.log(animals[1])
// // console.log(animals[animals.length - 1])


// // animals[0] = "geese" //setting a value at a particular index
// // console.log(animals)

// // animals[10] = "snakes"

// // animals[animals.length - 1] = "Durdona"

// // animals.push("geese", "horses") // add an element to the end of the array

// // //push evaluates to the new length of the array
// // console.log(animals.push("horses"))

// animals.pop() // pops off last element in the array
// console.log(animals.pop()) // pops off last element in the array

// let removedAnimal = animals.pop()
// console.log(removedAnimal)
// console.log(animals)

// fruits[1] = "pineapple";
// let fruit = fruits.pop();
// fruits.push("pear");
// fruits.push("strawberry");
// fruits[fruits.length - 1] = "banana";

// console.log(fruits)


// fruits.unshift("pear") // evaluates to new length of array
// fruits.shift() // evaluates to item removed

// const fruits = ["banana", "cherry", "apple"];
// console.log(fruits)

// const fruits = ["banana", "cherry", "apple"];
// fruits.unshift("pear");
// let fruit = fruits.pop();
// fruits[2] = "apple";
// fruits.unshift(fruit);
// fruits.shift();
// fruits.push(fruit);
// fruits[0] = fruits[1];
// console.log(fruits);

// const fruits = ["banana", "cherry", "apple"];
// let fruitsString = fruits.join("CAT") // does not mutate array
// console.log(fruitsString)

// const letter = ["c", "a", "t"]
// let word = letters.join ("$") //join joins the array with argument passed default to ","
// console.log(word.split("$")); //split on parts of string to make array
// console.log(letters);

// const fruits = ["banana", "cherry", "apple"]
// let fruitsString = fruits.join("&")
// let NewFruitArray = fruitsString.split("&")
// console.log(NewFruitArray)

// console.log(fruits.length)

// const middleElement = (array) => {
//     let num = Math.round((array.length-1)/2)
//     if((array.length % 2) === 0) {
//       return array[num - 1] [num]
//     } else {
//       return array[num]
//     }
//   }

//   console.log(middleElement())
// let arr1 = [1, 2, 3]
// let arr2 = arr1 // true
// arr2.push(4)
// console.log(arr1)
// console.log(arr2)
let arr1 = [1, 2, 3]
let arr2 = [1, 2, 3]
console.log(arr1 === arr2) //false

//slice allows us to slice (duplicate) parts of array or all of the array

? //[3] if sliced (0,2) 0 - inclusive, 2 - exlclusive
// duplicates if only sliced (0)
