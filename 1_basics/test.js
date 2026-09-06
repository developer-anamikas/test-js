// console.log("ANAMIKA HERE!")
// console.log("B.TECH")

// // LET , VAR & CONST
// const accountId = 144553
// let accountEmail = "hitesh@google.com"
// var accountPassword = "12345"
// accountCity = "Jaipur"
// let accountState;

// // accountId = 2 // not allowed

// accountEmail = "hc@hc.com"
// accountPassword = "21212121"
// accountCity = "Bengaluru"

// console.log(accountId);

// /*
// prefer not to use var
// because of issue in block scope and functional scope
// */

// console.log([accountId,accountEmail,accountPassword,accountState,accountCity]);


// // DATATYPES

// "use strict"; // treat all JS code as newer version

// // alert( 3 + 3) // we are using nodejs, not browser

// console.log(3
//     +
//     3) // code readability should be high

// console.log("Hitesh")

// console.log("Hitesh")

// let name = "hitesh"
// let age = 18
// let isLoggedIn = false
// let state = null
// let state1;

// // number => 2 to power 53
// // bigint
// // string => ""
// // boolean => true/false
// // null => standalone value
// // undefined =>
// // undefined =>
// // symbol => unique
// // object => null
// // undefined => undefined displayed


// console.log(typeof "hitesh");
// console.log(typeof age);
// console.log(typeof state);
// console.log(typeof state1);




// /********* DATATYPES CONVERSION  *******/



//         /* name -> number types */
// let name ="Anamika"
// let convertToNum = Number(name)
// console.log(typeof convertToNum)
// console.log(convertToNum)

// name = 1234
// convertToNum = Number(name)
// console.log(typeof convertToNum)
// console.log(convertToNum)

// name = ""
// convertToNum = Number(name)
// console.log(typeof convertToNum)
// console.log(convertToNum)

// name=null
// convertToNum = Number(name)
// console.log(typeof convertToNum)
// console.log(convertToNum)

// name="abc888"
// convertToNum = Number(name)
// console.log(typeof convertToNum)
// console.log(convertToNum)

// let name1=undefined;
// convertToNum = Number(name1)
// console.log(typeof convertToNum)
// console.log(convertToNum)

// let name2=true
// convertToNum = Number(name2)
// console.log(typeof convertToNum)
// console.log(convertToNum)

//     /* "Anamika" → NaN
//     1234 → 1234
//     "" → 0 (E)
//     null → 0
//     "abc888" → NaN
//     undefined → NaN
//     true → 1 
//     false → 0*/

    /* name -> boolean types */
// let value1=1
// let convertToBoolean= Boolean(value1)
// console.log(convertToBoolean)

// value1=2
// convertToBoolean= Boolean(value1)
// console.log(convertToBoolean)


// value1=""
// convertToBoolean= Boolean(value1)
// console.log(convertToBoolean)

// value1=null
// convertToBoolean= Boolean(value1)
// console.log(convertToBoolean)

// value1="Anamika"
// convertToBoolean= Boolean(value1)
// console.log(convertToBoolean)

// value1=0
// convertToBoolean= Boolean(value1)
// console.log(convertToBoolean)


// /* 1 → true
// 2 → true
// "" → false
// null → false
// "Anamika" → true
// 0 → false */

    /* name -> String types */
// let value2=33
// let convetToString= String(value2)
// console.log(typeof convetToString)
// console.log(convetToString)


// /******************operations **********/
// let value = 3
// let negValue = -value
// // console.log(negValue);

// // console.log(2+2);
// // console.log(2-2);
// // console.log(2*2);
// // console.log(2**3);
// // console.log(2/3);
// // console.log(2%3);

// console.log(1+2);
// console.log("3"+1+2);
// console.log(1+2+"3");

// let str1 = "hello"
// let str2 = " hitesh"

// let str3 = str1 + str2
// console.log(str3);

// console.log((3 + 4) * 5 % 3);

// console.log(true);
// console.log(+true);
// console.log(+"");


// // true -> true
// // +true -> 0
// // +"" -> 0

// let num1,num2,num3
// num1 = num2 = num3 = 2 + 2

// console.log([num1,num2,num3]);

// let gameCounter = 100
// ++gameCounter;
// console.log(gameCounter);



// /*****************Again DATATYPES */

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

//             // DONT USE THESE AFLTUS!!!!

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);
// // Relational comparison (>, <, >=, <=):
// // null is treated as 0.
// // null > 0  → false (0 > 0 is false)
// // null >= 0 → true  (0 >= 0 is true)

// // Loose equality (==):
// // null == undefined → true
// // null == 0         → false
// // null == null      → true

// console.log(undefined==0);
// console.log(undefined>=0);
// console.log(undefined<0);

// // Any comparison with NaN gives false.
// //
// // undefined == 0 → false
// // undefined > 0  → false
// // undefined < 0  → false

// // "==="    (STRICTYLY CHECK THE DATATYPES)
// console.log("2" ===2);


