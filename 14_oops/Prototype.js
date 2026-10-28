// // let myName = "hitesh     "
// // let mychannel = "chai     "

// // console.log(myName.trueLength);


// let myHeros = ["thor", "spiderman"]


// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }

// Object.prototype.hitesh = function(){
//     console.log(`hitesh is present in all objects`);
// }

// Array.prototype.heyHitesh = function(){
//     console.log(`Hitesh says hello`);
// }


// /*The speaker explains that in *JavaScript*, **everything is an object** (7:36-8:34). When you inject a property or method into `Object.prototype`, you are modifying the **top-level prototype** in the chain (33:01-34:39).

// Because arrays, functions, and standard objects all trace their prototype chain back to the base `Object`, applying `Object.prototype.hitesh` makes that property **immediately available to all of them** (34:39-35:15).

// *   **Global Access:** By injecting at the `Object` level, every instance—whether it's an array, a string, or a custom object—inherits that capability because they all share that same root prototype (34:39-35:15).
// *   **The Chain:** He demonstrates that even if you didn't define a method on an array specifically, if it exists on the `Object.prototype`, the array can access it because the *JavaScript* engine traverses up the prototype chain to find it (4:13-4:34, 34:39-35:15). */




// /* The speaker explains that in JavaScript, everything is an object (7:36-8:34). When you inject a property or method into Object.prototype, you are modifying the top-level prototype in the chain (33:01-34:39).
// Because arrays, functions, and standard objects all trace their prototype chain back to the base Object, applying Object.prototype.hitesh makes that property immediately available to all of them */

// heroPower.hitesh()
// myHeros.hitesh()
// heroPower.heyHitesh()  //HeroPower.Hitesh doesn't have the access to the Hey Hitesh method because the properties that are declared to array is not explicitly declared in the object. Because the object is one level higher and the array is one level lower. So whatever the thing we declare in the array is not declared in the object. But whatever the thing we declare in the object, that property applies to the rest of the array, string, and function as well.
// myHeros.heyHitesh()

// // inheritance

// const User = {
//     name: "chai",
//     email: "chai@google.com"
// }

// const Teacher = {
//     makeVideo: true
// }

// const TeachingSupport = {
//     isAvailable: false
// }

// const TASupport = {
//     makeAssignment: 'JS assignment',
//     fullTime: true,
//     __proto__: TeachingSupport
// }

// Teacher.__proto__ = User

// // modern syntax
// Object.setPrototypeOf(TeachingSupport, Teacher)             //refer to notes in copy

let anotherUsername = "ChaiAurCode     "

anotherUsername.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()            //https://chatgpt.com/s/t_6ae22e9932608191b8c80a4475b2264e
"hitesh".trueLength()
"iceTea".trueLength()

//https://chatgpt.com/s/t_6ae22ef62a78819180e0e780170cc46b
//https://chatgpt.com/s/t_6ae22f262ac08191a6600783b94ab234