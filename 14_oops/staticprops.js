class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    static createId() {
        return `123`;
    }
}

const hitesh = new User("hitesh");
// console.log(hitesh.createId()); 
console.log(User.createId()); //static sticked to class work only cant be accessed by object.


class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());



// static gives access to the class itself, not to individual objects.

// Think of it this way:
// - User.createId() → Correct. Accessing the static method through the class.
// - hitesh.createId() → Incorrect. Trying to access the static method through an object.