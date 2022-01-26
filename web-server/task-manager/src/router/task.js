const express = require("express");
const taskModel = require('../model/task-model.js');
const auth  = require('../middleware/auth');

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

// Goal: CreatingEnd Point with Auth

router.post('/tasksCreate', auth, async (req,res)=>{

    const task = new taskModel({
        ...req.body,
        owner: req.user._id
    })
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

router.get('/getTasks', auth, async (req, res) => {   
        // const match = {}
        // if(req.query.completed){
        //     match.completed = req.query.completed === 'true';
        // }
    try{
        const task = await taskModel.find({match});
        if(!task){
            return res.status(404).send()
        }
        // const tasked = await req.user.populate(task).execPopulate()
        res.status(200).send(task)
    }catch(e){
        res.status(400).send(e)
    }   
    // taskModel.find({}).then( tasks =>{
    //     res.send(tasks)
    // }).catch( e =>{
    // })
})
// Not Working
router.get('/getTasks/:id', auth, async (req, res) => {
    const _id = req.params.id
    try{
        const task = await taskModel.findOne({ _id, owner: req.user._id })
        if(!task){
            return res.status(404).send()
        }
        res.status(200).send(task)
    }catch(e){
        res.status(500).send()
    }
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