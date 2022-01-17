

// Simple Promise Lec

// const doPromise = new Promise((resolve,reject)=>{
    
//     resolve([1,2,3,4,'Node.js'])
//     reject("Something is wrong")

// })
// doPromise.then((result)=>{
//     console.log("Success ..!" + result);
// }).catch((error)=>{
//     console.log("Error .. !" + error);
// })

// Promise Chaining


const add = (a,b) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
             resolve(a + b)   
        }, 2000);
    })
}
add(2, 3).then((sum) =>{
    console.log("Sum is : " + sum)
    add(sum, 8).then((sumed)=>{
        console.log("Sumed : " +sumed)
    }).catch((e)=>{
        console.log(e)
    })
}).catch((e)=>{
    console.log(e)
})