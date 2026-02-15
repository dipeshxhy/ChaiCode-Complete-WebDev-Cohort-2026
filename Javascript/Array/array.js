//  3 ways of creating arrays

// const fruits = ['mango', 'apple']
// console.log(fruits.length)

// const fruits2 = new Array('mango', 'apple')

// const fruits3 = 'apple, orange'.split(', ')
// console.log(fruits3)

// create string from array by using join method

// const fruits = ['mango', 'apple']
// const text =  `I like to eat ${fruits.join(', ')}`

// console.log(text)
// Accessing elements by indexing
// const fruits = ['mango', 'apple']
// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[99]) /* index greater than last index gives undefined */

// to find position of elements in array use indexOf method if not found return -1

// to check certain items present or not use includes methods return true or false

//  to append items in array use push method
// to remove last item from array use pop method
//  to remove multiple items from array use splice method


// const fruits = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
// fruits.splice(3)
// console.log(fruits)

//  to remove first item from array use shift method

//  use splice method to remove more elements
// fruits.splice(0,3) /* like startIndex, deleteCount */

//  delete by index using splice method
// fruits.splice(fruits.indexOf('Banana'), 1)

//  replace multiple items in an array
// using splice method(start, deleteCount, replace items)

// fruits.splice(-2,2,'mango', 'cherry')

///////////////////////////////////////////////
// Iterate over arrays
// for of
//  forEach

// copy an array (3 ways)
//  spread syntax [...fruits]
// Array.from(fruits) /* construct new Array */
//  slice()



// const board = [
//   ["R", "N", "B", "Q", "K", "B", "N", "R"],
//   ["P", "P", "P", "P", "P", "P", "P", "P"],
//   [" ", " ", " ", " ", " ", " ", " ", " "],
//   [" ", " ", " ", " ", " ", " ", " ", " "],
//   [" ", " ", " ", " ", " ", " ", " ", " "],
//   [" ", " ", " ", " ", " ", " ", " ", " "],
//   ["p", "p", "p", "p", "p", "p", "p", "p"],
//   ["r", "n", "b", "q", "k", "b", "n", "r"],
// ];

// console.log(`${board.join("\n")}\n\n`);

// const fruits = [['a','b',[7,8]]].join('').split(',')
// console.log(fruits)
 
