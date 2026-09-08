/**************DATES****************/

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());


// let myCreateDate1 = new Date(2023,0,23)
// console.log(myCreateDate1.toDateString());

// let myCreateDate2 = new Date(2023,0,23,5,3)      // 0 -> January in array form
// console.log(myCreateDate2.toLocaleString());

// let myCreateDate3 = new Date("01-12-2023")  //01 -> January
// console.log(myCreateDate3.toLocaleString());


// let myDate= Date.now();
// console.log(myDate);     // Date from from January 1, 1970 → now.

// let myCreateDate4 = new Date("01-12-2023")
// console.log(myCreateDate4.getTime());  //How many milliseconds had passed from January 1, 1970 → January 14, 2023?

// console.log(Date.now());   //it gives you the current timestamp — the number of milliseconds 
                            //that have passed since January 1, 1970 (Unix Epoch) until right now.

// console.log(Math.floor(Date.now()/1000));   //convert to sec from ms & round off to floor value

// let newDate = new Date()
// console.log(newDate.toLocaleString());
// console.log(newDate.getMonth());   //Month starts with 0 index
// console.log(newDate.getDay());      //Day is acc to mon , tues ,weds

// let newDate1 = new Date()
// console.log(newDate1.toLocaleString('default', {                ////ctrl p for suggestions and used to CUSTOMIZE
//     weekday: "narrow",
//     year: "numeric",
//     month: "long",
//     day: "numeric"
// }));
