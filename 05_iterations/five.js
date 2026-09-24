// A higher-order function is a function that accepts another function as an argument
// or returns a function.
// In JavaScript, array methods like map(), filter(), forEach(), and reduce()
// are common examples.

// eg let arr = [1, 2, 3, 4];
// arr.forEach(function(x) {
//     console.log(x);
// });
// Here:
// arr → the array
// forEach() → higher-order array function
// function(x) → callback function
// forEach() applies that function to each element.

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function (item) { })          //syntax- function callback means function woukd not have the name 

//itarted the arrauy without using loop
// coding.forEach( function (val){
//     console.log(val);
// } )

//using arrow function
// coding.forEach( (item) => {
//     console.log(item)
// } )


// //pass by reference
// function printme(item){
//     console.log(item)
// }

// coding.forEach(printme)  //REMEMEBER - call refrence not execution using ()  X

//using arrow function with mutiple parameters passed
// coding.forEach( (item , index , arry) => {
//     console.log(item , index ,arry )
// } )

// //Array of objects used
// const lanuguage=[
//     {
//         languageName:"Javascript",
//         languageFilename:"js"
//     },
//     {
//         languageName:"Java",
//         languageFilename:"js"
//     },
//     {
//         languageName:"python",
//         languageFilename:"js"
//     },
// ]

// lanuguage.forEach( (i)=> {

//     console.log(i.languageName)

// })