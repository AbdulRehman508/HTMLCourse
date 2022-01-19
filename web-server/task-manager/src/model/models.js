const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is Invalid ... !");
            }
        }
    },
    password:{
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value){
            if(value.toLowerCase().includes('abc')){
                throw new Error("Password contain 'abc' ... !");
            }
        }
    },
    age: { 
        type: Number,
        required: true,
        default: 0,
        validate(value){
            if(value < 0){
                throw new Error("Age must be a positive number ...!")
            }
        }
    },
})

userSchema.pre('save', async function(next){
    const user = this

    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }
    
    next()

})

const createUser = mongoose.model('User', userSchema)

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

module.exports = createUser