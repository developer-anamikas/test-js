// const coding = ["js", "ruby", "java", "python", "cpp"]

// //forech doesnot return value
// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);

// ****************************FILTERFUNCTION***************************

//DEFINATION.
//filter() is used to select elements from an array based
//on a condition and return those selected elements as a 
//new array.

// Why do we use filter() instead of forEach()?
// forEach() is used to perform an operation on each element, but it does not
// return a new array.
// filter() is used when we want to select elements based on a condition
// and get those selected elements as a new array.
// Therefore, we use filter() when we need the filtered values as an array.


// const myNums=[1,2,3,4,5,6]

// //TYPE 1
// const newNum= myNums.filter( (num)=> num > 4 )       // REMEMBER :- returns the filtered array based on the conditon applied to the original Array.   
// console.log(newNum)

// //TYPE 2
// const newNum1= myNums.filter( (num)=> {
//     return num > 4
// } )          
// console.log(newNum1)

// const myNums=[1,2,3,4,5,6]
// newArr=[]

// myNums.forEach( (val)=> {
//     if(val > 2){
//        newArr.push(val)
//     }
// })

// console.log(newArr)


//ACTIVITY

// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

//     let userBooks = books.filter( (bk) => bk.genre === 'History')

//     userBooks = books.filter( (bk) => { 
//     return bk.publish >= 1995 && bk.genre === "History"
//     })

//   console.log(userBooks);