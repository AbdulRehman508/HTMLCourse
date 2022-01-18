
require('../src/db/mongoose');
const createUser = require('../src/model/models.js')
const taskModel = require('../src/model/task-model.js') 


// createUser.findByIdAndUpdate('61deaeb2832cd1f6249a26bc',{ age: 23 }).then((user)=>{
//         console.log(user)
// }).catch((e)=>{
//     console.log(e)
// })

taskModel.findByIdAndDelete('61e10b13d4e809ddd52cfcb6').then((task)=>{
        console.log(task)
        return taskModel.countDocuments({completed:false})
}).then((result)=>{
    console.log(result);
}).catch((e)=>{
    console.log(e)
})


const deleteTask = async (id) => {
    await taskModel.findByIdAndDelete(id);
    const count = await taskModel.countDocuments({completed:false})
    return count
}
deleteTask('61de77965d2ee9306cb30bcd').then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e);
})

