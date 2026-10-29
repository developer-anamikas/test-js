// https://chatgpt.com/s/t_6ae3584301b08191bcbb5470b40a38fc
//https://chatgpt.com/s/t_6ae35c246d088191a29c18d47b2616fc

function SetUsername(username) {
    this.username = username;
    
}

//https://chatgpt.com/s/t_6ae3621745e481919da366c7523b011e

function createUser(username, email, password) {
    SetUsername.call( this,username);      //call hua hi hhi reference gya , to explictly call we use call , 
                                            //The .call() method in JavaScript invokes a function immediately, allows us to explicitly set the value of this inside that function, and passes arguments individually.

    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai)



//.call is not enough so we go one step further 

/* Your understanding is spot on. Here is a breakdown of why `.call()` is necessary to prevent data loss in that specific scenario (10:50 - 12:00):

*   **The Problem (Independent Execution Contexts):** When you call `setUsername` normally, it creates its own temporary execution context (1:46). When it sets `this.username`, it attaches that data to its own local `this`, which effectively disappears as soon as that function completes and is popped off the call stack (9:58 - 10:14).
*   **The Data Loss:** Because `setUsername` is a separate function, it doesn't automatically "know" about the `createUser` object. Its internal `this` points to something else (like the global object or `undefined` in strict mode), meaning your `chai` object remains empty of the `username` property (8:06).
*   **The Solution (.call):** By using `setUsername.call(this, username)`, you are explicitly "handing over" the `this` of the parent function (`createUser`) to the sub-function (`setUsername`) (11:18 - 11:40).
*   **The Result:** Instead of using its own temporary space, `setUsername` now writes the `username` directly into the `createUser` object’s memory space. Even when `setUsername` finishes and its execution context is removed from the stack, the data persists because it was saved to the parent's persistent object instead of the temporary local one (12:00). */