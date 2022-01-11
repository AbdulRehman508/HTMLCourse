

const doPromise = new Promise((resolve,reject)=>{
    
    resolve([1,2,3,4,'Node.js'])
    reject("Something is wrong")

})
doPromise.then((result)=>{
    console.log("Success ..!" + result);
}).catch((error)=>{
    console.log("Error .. !" + error);
})