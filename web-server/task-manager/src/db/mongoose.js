
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-API',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const User = mongoose.model('User',{
    name: { type: String},
    address: { type: String},
    age: { type: Number},
})
const me = new User({
    name: 'Ehtisham-ul-haq',
    address: 'Faisalabad',
    age: 24
});
me.save().then(()=>{
    console.log('User-Details: ' + me)
}).catch((error)=>{
    console.log('Error: ' + error)
})
