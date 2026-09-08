/***************NUMS***************/

// const score = "H"
// console.log(typeof score);    // returns normally a number

// const balance = new Number(100)
// console.log(typeof balance);    //NOTE!!! -> returns obj when explicitly declared

// console.log(balance.toFixed(4)); // get values of 4 digits after point

// console.log(balance.toString().length); // convertt to String  then showits length

// const otherNum =100.00
// console.log(otherNum.toPrecision(4));  //gives you the total value uptill you want 

// const hundreds= 1000000
// console.log(hundreds.toLocaleString('en-IN')); // returns value with comma acc to Indian standards.




// /****************Maths*****************/


// console.log(Math);  //returns obj

// console.log(Math.abs(-4));
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.6));
// console.log(Math.min(2,6,4,6,7));
// console.log(Math.max(2,6,4,6,7));

// console.log(Math.random());  //returns random values b/w 0 and 1     EG -> 0.01 lies between 0 and 1
// console.log(Math.random()*10);  //shifts value towaards left  , 0 to 10   EG -> 0.01 TO 0.1 
// console.log(Math.random()*10 + 1);  //to remove this above situation eg prblem we add 1 so          EG-> 0.1 becomes 1.0 
//                                     // this gives you value between 1 to 10 , i.e , above 1 only
//                                     // this avoids zero case
// const min =10
// const max= 20

// console.log((Math.random()*(max-min +1))+min);   // max - min to get the range to get randomize values 
//                                                 //+1 to ignore the zero case
//                                                 //min to get the values above min
// console.log((Math.floor(Math.random()*(max-min +1))+min));