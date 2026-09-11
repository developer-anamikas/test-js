// const user={
//     username: "Anamika",
//     price:999,

//     welcomeMessage: function(){
//         console.log(`${this.username},welcome to the website`);             //https://chatgpt.com/s/t_6aa3b6e860c08191acd97fb3ee927440
//                                                                         //https://chatgpt.com/s/t_6aa3b7643bbc8191b964cb1054e4a1fc
//         console.log(this);                                          //this is simplyn used to refer to the current context 
        
//     }
// }
// user.welcomeMessage()                               
// user.username="Sam"
// user.welcomeMessage()


// console.log(this);          //refers to node enviorment , currently empty 
//                             //https://chatgpt.com/s/t_6aa3b3d54c4c8191a9b1d9fb809aca18   node.js vs browser  window object

/***************SOMEHTING MORE ABOUT THIS****************/


// function chai(){
//     console.log(this);    
// }
// chai()

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);    //CANT USE THIS KEYWORD IN THIS FUNC
// }
// chai()


// const chai= function (){
//     let username = "hitesh"
//     console.log(this.username);    //CANT USE THIS KEYWORD IN THIS FUNC
// }
// chai()


// const chai=  () => {
//     console.log(this);                  //https://chatgpt.com/s/t_6aa3bcad31b881918450d4d725944bca
// }
// chai()


// const ADDTWO = (num1 , num2) => {
//     return num1 + num2               //A TYPE OF EXPLICIT RETURN 
// }
// console.log(ADDTWO(1,2));


// // /**********IMPLICIT RETURN************/
// const ADDTWO = (num1 , num2) =>  (num1 + num2)                  //if you use {} -> include return
//                                                                 // if you do (num1 + num2) in this way , no need of return 
// console.log(ADDTWO(1,2));


// const addTwo = () => ({ username: "hitesh" });          //Arrow func returns obj  REMEMEBER USE () , having {} inside
// console.log(addTwo());




// const fun1=function(){                  //Normally Func returns obj
//     return{
//         username:"Anamika",
//         Rank:1,
//     }
// }

// console.log(fun1());
