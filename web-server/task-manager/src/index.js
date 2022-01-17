
const express = require("express");
require('./db/mongoose')
const createUser = require('./model/models.js')
const taskModel = require('./model/task-model.js') 

const app = express();
const port = process.env.PORT || 3000

app.use(express.json())

// CreateEnd Point

app.post('/users',(req,res)=>{
    const user = new createUser(req.body)
    user.save().then(()=>{
        res.send("User is successfully Created ... !");
    }).catch((e)=>{
        res.status(400).send(e)
    })
    // res.send('Testing .. !')
})
// Goal: CreatingEnd Point
app.post('/task',(req,res)=>{
    const task = new taskModel(req.body)
    task.save().then(()=>{
        res.status(200).send(task  + "Task is send .. !")
    }).catch((e)=>{
       res.status(400).send(e)
    })
})

// ReadEnd Point

app.get('/getUsers',(req, res)=>{      
        createUser.find().then( users =>{
            res.send(users)
        }).catch( e =>{
            res.status(400).send(e)
        })
})

app.get('/getUsers/:id', (req, res) => {
    const _id = req.params.id

    createUser.findById(_id).then((user) => {
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    }).catch((e) => {
        res.status(500).send()
    })
})

// Goal: ReadingEnd Point

app.get('/getTasks', (req, res) => {      
    taskModel.find().then( tasks =>{
        res.send(tasks)
    }).catch( e =>{
        res.status(400).send(e)
    })
})
// Not Working
app.get('/getTasks/:id', (req, res) => {
    const _id = req.params.id

    createUser.findById(_id).then((task) => {
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    }).catch((e) => {
        res.status(500).send()
    })
})





app.listen(port, ()=>{
    console.log('Port is working .. !' + port);
})