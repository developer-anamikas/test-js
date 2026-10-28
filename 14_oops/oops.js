const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        //console.log("Got user details from database");            //https://chatgpt.com/s/t_6ae0e16ab28c81918f2f333c4073f70c
        console.log(`Username: ${this.username}`);              //https://chatgpt.com/s/t_6ae0e13b513c81919a0e2ff3bb71b73f
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);
 

//CONSTRUCTOR FUNCTION CRAETED
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
// const userTwo = new User("ChaiAurCode", 11, false)
// console.log(userOne.constructor);           //constructor is a property that refers to the function used to create the object.


// //The instanceof operator checks whether an object has a particular constructor's prototype in its prototype chain.
// console.log(userOne instanceof User); // true
// console.log(userTwo instanceof User); // true
// console.log(userOne instanceof Array); // false

// console.log(userOne.greeting())