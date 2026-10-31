//https://chatgpt.com/s/t_6ae5e0397f58819188aa009699d23eea
//https://chatgpt.com/s/t_6ae5e055eedc819182373c37db5ea25e
//https://chatgpt.com/s/t_6ae5e055eedc819182373c37db5ea25e

const User = {
    _email: 'h@hc.com',
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
} 

const tea = Object.create(User);   
console.log(tea.email) //no need to do tea.email() cause it allows to access it as property.

//https://chatgpt.com/s/t_6ae5e2f65b8081919d2a785968ded73b
/*Correct definition:

Object.create() creates a new object and sets the specified existing object as its prototype, 
allowing the new object to access its properties and methods through the prototype chain. */
