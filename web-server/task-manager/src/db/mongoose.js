
const mongoose = require('mongoose')
// const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-API',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
})



// const task = mongoose.model('user-task',{
//         description: { 
//             type: String,
//             trim: true,
//             required: true
//         },
//         completed: { 
//             type: Boolean,
//             default: false
//         },
//     })
//     const me = new task({
//         description: 'Nice Quality',
//         // completed: true,
//     });
//     me.save().then(()=>{
//         console.log('User-Details: ' + me)
//     }).catch((error)=>{
//         console.log('Error: ' + error)
//     })