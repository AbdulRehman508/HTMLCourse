
const express = require("express");
require('./db/mongoose')
const createUser = require('./model/models.js')
const taskModel = require('./model/task-model.js') 

const app = express();
const port = process.env.PORT || 3000

app.use(express.json())

// CreateEnd Point

app.post('/users', async (req,res)=>{
    const user = new createUser(req.body)
    try{
        await user.save();
        res.status(200).send("User is successfully Created ... !" + user);
    }catch(e){
        res.status(400).send(e);
    }

    // user.save().then(()=>{
    //     res.send("User is successfully Created ... !");
    // }).catch((e)=>{
    //     res.status(400).send(e)
    // })
    // res.send('Testing .. !')
})

// Goal: CreatingEnd Point
app.post('/tasks', async (req,res)=>{

    const task = new taskModel(req.body)
    try{
        await task.save();
        res.status(200).send("Task is created" + task)
    }catch(e){
        res.status(400).send(e)
    }

    // task.save().then(()=>{
    //     res.status(200).send(task  + "Task is send .. !")
    // }).catch((e)=>{
    //    res.status(400).send(e)
    // })
})

// ReadEnd Point

app.get('/getUsers', async (req, res)=>{
    
    try{
        const getUser = await createUser.find({})
        res.status(200).send(getUser)
    }catch(e){
        res.status(400).send(e)
    }

        // createUser.find().then( users =>{
        //     res.send(users)
        // }).catch( e =>{
        //     res.status(400).send(e)
        // })
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

// UpdateEnd Point

app.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }
    try {
        const user = await createUser.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})
// Goal: updateEnd Point

app.patch('/tasks/:id', async (req,res) => {

    const update = Object.keys(req.body);
    const allowedUpdates = ['description','completed']
    const isValidOperation = update.every((item) => allowedUpdates.includes(item))

    if(!isValidOperation){
        return res.status(400).send({ error: 'Invalid updates!' })
    }
    try{
        const task = await taskModel.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }

})

// deletingEnd Point

app.delete('/users/:id', async (req,res) => {
    try{
        const user = await createUser.findByIdAndDelete(req.params.id);
        if(!user){
            res.status(404).send("User Not found ... !")
        }
        res.send(user + "User is successfully Deleted ... !")
    }catch(e){
        res.status(400).send(e)
    }
})

app.listen(port, ()=>{
    console.log('Port is working .. !' + port);
})