class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    get password(){            //Getters are used to retrieve a value from outside the class. 
        return `${this._password}confidentail`;           ////when used getter setter get , set automatically makes method for those properties.
    }
    // set password(value){                //Setters are used to assign or set a value from outside the class.
    //     return this.password=value;     //if you use getter you must also use setter.
    // }

    set password(value){  
        return this._password=value;         //The "race" condition happens because both the constructor and the setter method are trying to assign a value to the same property simultaneously means in same variable this.password. Stack overflow occurs here
    }                                       //so we use diff variable from this.password -> this._password


    set email(value){
        this._email=value.toUpperCase();        //we can also use setter to modify the value of the property.
    }
    get email(){
        return this._email;
    }

}

const hitesh = new User("h@hitesh.ai", "Anu")
// console.log(hitesh.password);       //suppose i dont want to disc;lose properties of the obj then we can use getter and setter
console.log(hitesh.email)
