// // const tinderUser= new Object();  //singleton
// // console.log(tinderUser);

// const tinderUser1= {}           //non -singleton
// console.log(tinderUser1);

// tinderUser1.id="123abc"
// tinderUser1.name="Anamika"
// tinderUser1.booleanV=true

// // console.log(tinderUser1);

// // //obj with obj
// // const regularUser={
// //     fullname:{
// //         userfullname:{
// //             firstname:"Anamika",
// //             lastname:"sahu",
// //         }
// //     }
// // }

// // console.log(regularUser.fullname.userfullname.firstname);


// //obj merging

// const obj1={1:2,3:"e"}
// const obj2={4:5,6:"f"}

// const obj3={obj1,obj2}              //objs within obj
// console.log(obj3);

// const obj4=Object.assign({},obj1,obj2);             //obj is one only 
// console.log(obj4);

// const obj5={...obj1,...obj2}                    //obj has spread the elemenst within
// console.log(obj5);

// //Arrays of Objects
// const arr=[
//     {
//         name:"Anamika",
//         id:"01"
//     },
//     {
//         name:"Anamika",
//         id:"01"
//     },
//     {
//         name:"Anamika",
//         id:"01"
//     }
// ]

// console.log(arr[0].name);

// console.log(Object.keys(tinderUser1));   //access the total keys 
// console.log(Object.values(tinderUser1));     //access the total values
// console.log(Object.entriesntries(tinderUser1));      //access key value part in array
