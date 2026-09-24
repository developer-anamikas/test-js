// // for of

// ["","",""]
// [{},{},{}]

// const arr =[1,2,3,4,5]

// for (const num of arr) {    //array , obj , string also can be used
//     console.log(num);
// }

// const greetings = "HELLO WORLD!"
// for(const greet of greetings){
//     console.log(`Each char is ${greet}`)
// }

// // Maps :-colection of unique values

// const map = new Map()
// map.set('IN',"INDIA")                    //map is object itself
// map.set('USA',"USA")
// map.set('Fr',"France")
// map.set('IN',"INDIA")    
// // console.log(map)

// for (const key of map) {                //returns Array
//     console.log(key);
// }
// console.log(map)

// for (const [key, value] of map) {            // to get values separately
//     console.log(key, ':-', value);
// }

//Objects are not iteratable using forof

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }


// //Map not works out ofr forin
// const map = new Map()
// map.set('IN',"INDIA")                    
// map.set('USA',"USA")
// map.set('Fr',"France")
// map.set('IN',"INDIA")    
// // console.log(map)

// for (const key in map) {                
//     console.log(key);
// }

