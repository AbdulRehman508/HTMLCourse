const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    description: { 
        type: String,
        trim: true,
        required: true
    },
    completed: { 
        type: Boolean,
        default: false
    },
},{
    timestamps:true
})


const taskModel = mongoose.model('user-task',userSchema)

    // const me = new task({
    //     description: 'Nice Quality',
    //     // completed: true,
    // });
    // me.save().then(()=>{
    //     console.log('User-Details: ' + me)
    // }).catch((error)=>{
    //     console.log('Error: ' + error)
    // })

module.exports = taskModel