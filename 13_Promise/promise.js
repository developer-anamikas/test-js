// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is compelete');
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// //WITHOUT VARIABLES

// new Promise(function(resolve, reject){
//     setTimeout(function(){  
//         console.log('Async task 2 is complete');
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Promise 2 consumed");
// })


// //PASSED DATA
// new Promise(function(resolve, reject){  
//     setTimeout(function(){
        
//         resolve({user:"John", age: 30});
//     },1000)
// }).then(function(user){
//     console.log(user);
// })


// //CHAINING
// const promiseFourth = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error=false;
//         if(!error){
//             resolve({username:"John", age: 30});
//         }
//         else{
//             reject('Error: Something went wrong');
//         }
//     },1000)
// });
// promiseFourth.then(function(user)
// {
//     console.log(user);
//     return user.username
// }).then(function(username){
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally( () => {
//     console.log('Promise is either resolved or rejected');
// })

// //ASYN/AWAIT
// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if (!error) {
//             resolve({username: "javascript", password:"123"})                                
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// })
// // async function consumePromiseFive(){                
// //     const response = await promiseFive
// //     console.log(response);
// // }

// // consumePromiseFive()                //YOU WILL NOT GET THE ERROR MESSAGE BECAUSE IT IS NOT HANDLED. SO, YOU NEED TO HANDLE IT WITH TRY CATCH BLOCK.
// //                                     //MAKE TRUE TO HANDLE THE ERROR MESSAGE WITH TRY CATCH BLOCK. OTHERWISE, IT WILL THROW AN UNHANDLED PROMISE REJECTION ERROR.
// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFive() 


// //ASYNC 2
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()              //takes time so we used await
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers()


//USING THEN
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))