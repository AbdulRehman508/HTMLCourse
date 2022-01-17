

const add = (a,b) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(a < 0 || b < 0 ){
               return reject("Number Must be a positive number ...!")
            }
            resolve(a + b)   
        }, 2000);
    })
}

const doWork = async () => {
      const sum = await add(1, -5)
      const sum2 = await add(sum, 12)
      const sum3 = await add(sum2, 10)  
      return sum3  
}
doWork().then((result) =>{
    console.log("Sum is : " + result)
}).catch((e)=>{
    console.log(e)
})