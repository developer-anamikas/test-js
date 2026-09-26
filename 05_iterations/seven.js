// Definition of map():
// map() is a higher-order array method that applies an operation to every
// element of an array and returns a new array containing the modified values.

// Difference between map() and filter():
// map() is used to manipulate or transform the values of an array.
// filter() is used to select values based on a condition and returns a new array.

// Example:
// map()    → [1, 2, 3] → [11, 12, 13]  (values are changed)
// filter() → [1, 2, 3] → [2, 3]       (values are selected)

// Why use map() instead of filter()?
// We use map() when we want to modify/transform every element.
// We use filter() when we only want to select elements that satisfy a condition.
// Therefore, filter() cannot replace map() when the values need to be changed.


// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNumbers.map((num) => { return num + 10 })
// console.log(newNums);


// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // const newNums = myNumers.map((num) => { return num + 10 })

// //CHAINING
// const newNums= myNumbers.map( (num)=> num *10 )     //The result is passed to next chain  
//                         .map( (num)=> num+1 )       //opeartion is performed on its prev chain
//                         .map( (num)=> num>=40 )
// console.log(newNums)