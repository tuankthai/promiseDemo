const promise = new Promise((resolve, reject) => {  
    //reject is optional
    // const random =  1
    // if(random === 0) {
    //     resolve("success")
    // } else {
    //     reject("failed")
    // }
    setTimeout(() => {
        resolve("done!")
    }, 5000)
})

// console.log(promise)
promise.then(res => {
    console.log(res)
})