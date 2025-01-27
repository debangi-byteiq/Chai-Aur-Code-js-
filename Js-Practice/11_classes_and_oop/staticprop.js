class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

     static createId(){//prevents from accessing this property
        return '123'
    }
}
const hitesh = new User("hitesh")
// console.log(hitesh.createId())//createId is not accessible as it is defined static

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());