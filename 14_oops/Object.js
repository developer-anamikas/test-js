function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2

// console.log(multipleBy5(5));
// console.log(multipleBy5.power);         //In JavaScript, functions are objects too. More precisely, ordinary functions are callable objects, which means they can both execute code and have properties.

console.log(multipleBy5.prototype);     