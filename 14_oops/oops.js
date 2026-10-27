const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        //console.log("Got user details from database");            //https://chatgpt.com/s/t_6ae0e16ab28c81918f2f333c4073f70c
        console.log(`Username: ${this.username}`);              //https://chatgpt.com/s/t_6ae0e13b513c81919a0e2ff3bb71b73f
    }
}

console.log(user.username);
console.log(user.getUserDetails());