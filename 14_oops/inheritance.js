class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(usernanme,email,password){
        super(usernanme);                    
        this.email=email;
        this.password=password;
    }
    addCourse(){
        console.log(`Course added by ${this.username}`);
    }
}
const chai = new Teacher("chai", "chai@gmail.com", "123");          
// console.log(chai);
// chai.addCourse();

const masalaChai = new User("masalaChai");
masalaChai.logMe();

console.log(chai === masalaChai); //false
console.log(chai === Teacher);//false
console.log(chai instanceof Teacher);  //ture
console.log(chai instanceof User);//true

//******Importance of super keyword********//
//In JavaScript classes, the super keyword is used within a child class's
// constructor to call the constructor of the parent class it extends

// In a subclass, the this keyword is not automatically defined until the parent constructor has run.
//By calling super() first (12:47-13:16), you are triggering the parent class to create and initialize the this object for you. 
// Only after this step is complete does the this context become "unlocked" and 
// available for the child class to use to attach its own properties like this.email or this.password. 
// If you try to use this before super(), JavaScript will throw a reference error because that object doesn't exist yet.


/*NEW KEYWORD*/
/*That is exactly correct. When you attempt to invoke a class constructor or a constructor function without the **`new`** keyword, the JavaScript engine does not create a new object instance. Instead, it treats the function like a regular function call, where **`this`** defaults to the global context.
*   **In Browsers:** **`this`** points to the **`window`** object.
*   **In Node.js:** **`this`** typically points to the global object (though in modules, it may refer to an empty object `{}` depending on strict mode and how the file is executed).
As mentioned in the video (15:43-16:09), the **`class`** syntax in modern JavaScript is strict; it will explicitly throw a **TypeError** preventing you from accidentally attaching properties to the global scope, unlike older function-based constructors which would silently pollute the global environment. The **`new`** keyword is the essential trigger that signals the engine to create a brand new, isolated execution context for your object. */



/*The reason chai === Teacher returns false is because you are comparing two fundamentally different things (17:44-18:01):
chai is an instance (an object) created from the Teacher class. It holds specific data (like username, email, etc.) in memory.
Teacher is the class definition (a blueprint/function) itself, not an instance.*/