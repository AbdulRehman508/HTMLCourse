
const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-API',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


// const User = mongoose.model('User',{
//     name: { 
//         type: String, 
//         required: true,
//         trim: true
//     },
//     address: { 
//         type: String,
//         required: true,
//         trim: true
//     },
//     email:{
//         type: String,
//         required: true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error("Email is Invalid ... !");
//             }
//         }
//     },
//     password:{
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 7,
//         validate(value){
//             if(value.toLowerCase().includes('abc')){
//                 throw new Error("Password contain 'abc' ... !");
//             }
//         }
//     },
//     age: { 
//         type: Number,
//         required: true,
//         default: 0,
//         validate(value){
//             if(value < 0){
//                 throw new Error("Age must be a positive number ...!")
//             }
//         }
//     },
// })
// const me = new User({
//     name: 'MATLOOB',   //.trim(),     //.toLowerCase(),
//     address: 'Faisalabad',
//     email: 'matloob@gmail.com',
//     password: ' peoplei@123 ',
//     age: 02
// });
// me.save().then(()=>{
//     console.log('User-Details: ' + me)
// }).catch((error)=>{
//     console.log('Error: ' + error)
// })


const task = mongoose.model('user-task',{
        description: { 
            type: String,
            trim: true,
            required: true
        },
        completed: { 
            type: Boolean,
            default: false
        },
    })
    const me = new task({
        description: 'Nice Quality',
        // completed: true,
    });
    me.save().then(()=>{
        console.log('User-Details: ' + me)
    }).catch((error)=>{
        console.log('Error: ' + error)
    })