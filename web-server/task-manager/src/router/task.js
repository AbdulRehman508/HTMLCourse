const express = require("express");
const taskModel = require('../model/task-model.js')
const router = new express.Router();


// Goal: CreatingEnd Point
router.post('/tasks', async (req,res)=>{

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

// Goal: ReadingEnd Point

router.get('/getTasks', (req, res) => {      
    taskModel.find().then( tasks =>{
        res.send(tasks)
    }).catch( e =>{
        res.status(400).send(e)
    })
})
// Not Working
router.get('/getTasks/:id', (req, res) => {
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

// Goal: updateEnd Point

router.patch('/tasks/:id', async (req,res) => {

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




module.exports = router