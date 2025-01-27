function SetUsername(username){
    //complex DB calls
    this.username = username
}

function createUser(username,email, password){
    // SetUsername(username)//will not get called , as only reference is given here
    SetUsername.call(this, username)//to call explicitly 
    //above will also not access the variable so we need to hold a reference
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);