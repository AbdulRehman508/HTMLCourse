
const express = require("express");
require('./db/mongoose')
const createUser = require('./model/models.js')
const taskModel = require('./model/task-model.js') 

const app = express();
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users',(req,res)=>{
    
    // const user = new createUser(req.body)

    // user.save().then(()=>{
    //     res.send("User is successfully Created ... !");
    // }).catch((e)=>{
    //     res.status(400).send(e)
    // })
    // res.send('Testing .. !')


    // For task

    const task = new taskModel(req.body)
    task.save().then(()=>{
        res.status(200).send(task  + "Task is send .. !")
    }).catch((e)=>{
       res.status(400).send(e)
    })
})

app.listen(port, ()=>{
    console.log('Port is working .. !' + port);
})