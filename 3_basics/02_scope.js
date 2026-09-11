// var c=300       //global scope -> for var the value changes to c=30
// let a=100      //global scope -> the global variable declared using let ,const doesn't change when declared globally   
// const b=200;

// if(true){
//     let a= 10
//     const b=20
//     console.log(b);
//     var c=30            //Dont use var
// }

// console.log(a);   //show error coz its scoe is within if {} block
// console.log(b);  //show error coz its scoe is within if {} block
// console.log(c);     //scop doesn't work


// const z=10          //globally declared
// if(true){
//     console.log(z);   
// }

/**********GLOBALSCOPE WORKS DIFFERENTLY IN NODE.JS ENVIORNMENT & BROWSER**********/

// function one(){
//     const username ="hitesh"
//     function two(){
//         const website ="hitesh"
//         console.log(username);              
//     }
//     // console.log(website);

//     // two()                    //Because two() is inside the scope of one(), so two() can access variables created in one().
// }
// one()                   //only one() is executed not two() , you need to call it using two()


// if(true){
//     const username ="hitesh"
//     if(username==="hitesh"){
//         const website="youtube"
//         console.log(username + " " + website);
//     }
//     // console.log(website);
// }
// // console.log(username);

// /*****************INTERESTING THING TO REMEMBER******************/

// console.log(one(1));

// function one(num){                   //here function is declared directly 
//     return num +1
// }

// two(1)                                  //wont work 
// const two=function (num){               //here function is declared with the variable
//     return num +1
// }
// console.log(two(1));
