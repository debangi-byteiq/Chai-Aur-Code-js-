// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.


// fetch('https:****').then().catch().finally()

const promiseOne = new Promise((resolve, reject)=>{
    //Do an async task
    //DB calls, cryptography, network call
    setTimeout(()=>{
        console.log("Async task is complete")
        resolve()
    }, 1000)
})

promiseOne.then(()=>{
    console.log("Promise consumed");
})

new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("async task 2")
        resolve()
    }, 1000)
}).then(()=>{
    console.log("Async 2 resolved")
})

const promiseThree = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000);
})
promiseThree.then((user)=>{
    console.log(user)
})

const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = false
        if (!error){
            resolve({username: "Chai", email: "chai@example.com"})
        }else{
            reject('ERROR!! Something went wrong')
        }
    }, 1000)
})

// const username = promiseFour.then((user)=> {
//     console.log(user)
//     return user.username
// })

// console.log(username) //Promise{<pending>}
//UnhandledPromiseRejection

promiseFour.then((user)=> {
        console.log(user)
        return user.username
    }).then((username)=>{
        console.log(username);
    }).catch((err)=>{
        console.log(err);
    }).finally(()=> console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = false
        if (!error){
            resolve({username: "JS", password: "chai@123"})
        }else{
            reject('ERROR!! JS went wrong')
        }
    }, 1000)
})

// promiseFive.then()

// async~await

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }catch(error){
        console.log(error);
    }
   
} //should have try catch block when we use async await to handle errors gracefully

consumePromiseFive()

const getAllUsers = async()=>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // console.log(response)
        const data = await response.json() //takes timse to convert so use await
        console.log(data, "fetch() example code")
    }catch(error){
        console.log("E", error)
    }
}
getAllUsers()


// *******this piece executes firsttttt*******
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data, 'data')
})//thenable
.catch((error)=> console.log(error))


// https://blog.logrocket.com/fetch-api-node-js/   ---->source
//fetch queue is a priority queue or also calle da microtask queue
//this is the reason why these task are executed first

