
// Basic Concept

// const add = (a,b) =>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             if(a < 0 || b < 0 ){
//                return reject("Number Must be a positive number ...!")
//             }
//             resolve(a + b)   
//         }, 2000);
//     })
// }

// const doWork = async () => {
//       const sum = await add(1, -5)
//       const sum2 = await add(sum, 12)
//       const sum3 = await add(sum2, 10)  
//       return sum3  
// }
// doWork().then((result) =>{
//     console.log("Sum is : " + result)
// }).catch((e)=>{
//     console.log(e)
// })

// Using API

require('../src/db/mongoose');
const createUser = require('../src/model/models.js')
const taskModel = require('../src/model/task-model.js') 


// createUser.findByIdAndUpdate('61deaeb2832cd1f6249a26bc',{ age: 23 }).then((user)=>{
//         console.log(user)
// }).catch((e)=>{
//     console.log(e)
// })

const updateAgeById = async (id,age) => {
   await createUser.findByIdAndUpdate(id,{age});
   const count = await createUser.countDocuments({age});
   return count
}
updateAgeById('61deaeb2832cd1f6249a26bc',24).then((result)=>{
    console.log("Record : " + result)
}).catch((e)=>{
    console.log(e);
})