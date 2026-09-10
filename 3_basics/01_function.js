// function func1(){
//     console.log("Hi");
// }

// func1()   //NOTE - when i just write func1 ->reference
//          // func1() -> execution

// function addnum(num1 , num2){     //parameters
//     console.log(num1 + num2);    
// }

// const result = addnum(1,2)           //arguements declared
// console.log(result);                //no return type


// function addnum1(num1 , num2){                 //cosnole does not return any value to result1 that's why undefined-> const result1 =console.log(num1 + num2);
//     const result1 =num1 + num2                
//     console.log("THIS IS VISIBLE !");        
//     return result1                         //return value to store in variable result
//     //console.log("THSI IS INVISBLE");    //since returned in above , so the current statement will not work
    

// }

// console.log(addnum1(1,2));               //return value
// console.log(addnum1());               //returns Nan

// const result1=addnum1(2,3)
// console.log(result1);


// function loginUserName(username){
//     if(username===undefined){
//         return `${username} is logged in the website`
//     }
// }

// console.log(loginUserName());               //nothing defined , hence it gives undefined


// function loginUserName1(username){
//     if(username===undefined){
//         console.log(`${username} , please enter the username`);
//         return
//     }
//     return `${username} has logged in the website`    //this becomes undefined
    
// }
// console.log(loginUserName1());


// //TO OVERCOME UNDEFINED SITUATION WE JUST USED A NAME NAMED AS SAM
// function loginUserName2(username ="sam"){
//     if(username===undefined){
//         console.log(`${username} , please enter the username`);
//         return
//     }
//     return `${username} has logged in the website`    //this becomes undefined
    
// }
// console.log(loginUserName2());


// function calculateCrtPrice(num1 , num2 , ...num3){             //...->rest operator or spread operator
//     return num3;
// }
// console.log(calculateCrtPrice(100,200,300,400,500,600,700,800,900,1000));   //num 1->100
//                                                                             //num2 -> 200
//                                                                             //num3 -> takes multiple values from 300 to 1000


//*****obj called within the function******/
// const user={                //STEP 1- obj declared here
//     username:"Anamika",
//     roll:15,
// }
// function handleObject(anyobj){                      // STEP 2- WE PASS THE PARAMETER HERE
//     console.log(`Username is ${anyobj.username} and price is ${anyobj.roll}`);    //obj datas  is being used here
// }
// handleObject(user)              //Called the function with obj name USER
//                                 //TOO RISKY TO DO 


// //TO OVERCOME THE SITUATION YOU CAN DO THE FOLLOWING
// function handleObject(anyobj){                      
//     console.log(`Username is ${anyobj.username} and price is ${anyobj.roll}`);    
// }
// handleObject({                  //it is like anyobj = {  username:"Anamika" roll:15, }
//     username:"Anamika",
//     roll:15,
// })


/************ARRAY CALLED WITHIN THE FUNCTION*********/
// const myarr=[1,2,3,4,5]
// function arrfunc(getarr){
//     return getarr[0]
// }
// console.log(arrfunc(myarr));

// console.log(arrfunc([4,2,3]));          //used [] within ()


