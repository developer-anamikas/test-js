//https://chatgpt.com/s/t_6ae365bf29cc8191a1b0953014d5e2aa

class user{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    encrypt(){
        return `${this.name}${this.age}`
    }

}

const chai = new user("chai", 20);
console.log(chai)
console.log(chai.encrypt())

// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());