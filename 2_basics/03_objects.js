// // singleton

// //obj literals

// const sym= Symbol("key1");   //symbol declared

// const obj={
//     name:"Anamika",
//     age:20,
//     value:true,             //boolean
//     email:"wonttell@gmail.com",
//     "college":"MSIT",           //college is expliicitly declared as String by User.
//     [sym]:"key1",               //Symbol is declared within brackets
// }


// console.log(obj.email);         //to access the value using key in obj
// console.log(obj["name"]);               //good way to access the value
// console.log(obj["college"]);        //you cant do using . dot to access the obj
// console.log(obj[sym]);  

// obj.email="sahunishabla@gmail.com"
// console.log(obj);

// Object.freeze(obj);                 //it freezes the obj so thatno changes are made
// obj.email="anonymousZeebra@gmail.com"
// console.log(obj);

// //********************FUNCTIONS************//

// obj.greetings1=function(){
//     console.log("hello");
// }
// console.log(obj);

// obj.greetings2=function(){
//     console.log(`${this.name} Here!`);           //here same obj is referred then used this
// }
// console.log(obj.greetings1);    //returns anonymous for func
// console.log(obj.greetings1());   //applied bracket then you see the inside func
// console.log(obj.greetings2());
