/******************ARRAYS******************/

const Arrays =[0,1,2,3,4,5]
console.log(typeof Arrays);

const myHeros=new Array("Shaktiman","naag")
console.log(typeof myHeros);
console.log(myHeros[0]);

const arr1=[0,1,2,3,9,5,6]
arr1.push(7);
console.log(arr1);

arr1.pop();
console.log(arr1);

arr1.unshift(9);        
console.log(arr1);             //insert value at the begin
arr1.shift();                  //remove value from begin
console.log(arr1);

console.log(arr1.includes(9));
console.log(arr1.indexOf(9));

const newArr =arr1.join();     //converts arr to string by joining
console.log(newArr);
console.log(typeof newArr);


//slice, splice
const arr2=[0,1,2,3,4]

console.log("A",arr2);

const my1= arr2.slice(1,3)     //last index = second last index included  
                                //original arr not affected
console.log(my1);
console.log(arr2);


const my2= arr2.splice(1,3)     //last index also included
console.log(my2);               //original array is affected by excluding the slice part
console.log(arr2);


