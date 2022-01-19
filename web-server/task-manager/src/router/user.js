
const express = require("express");
const createUser = require('../model/models');
const router = new express.Router();

// CreateEnd Point

router.post('/users', async (req,res)=>{
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

// User Login

router.post('/users/login', async (req,res) =>{ 
    try{
        const user = await createUser.findByCredentials(req.body.email, req.body.password)
        res.status(200).send("User is Successfully Login" + user)
    }catch(e){
        res.status(400).send(e);
    }
})

// ReadEnd Point

router.get('/getUsers', async (req, res)=>{
    
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

router.get('/getUsers/:id', (req, res) => {
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

// UpdateEnd Point

router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }
    try {
        const user = await createUser.findById(req.params.id)
        updates.forEach((item) => user[item] = req.body[item])
        await user.save();
        // const user = await createUser.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

// deletingEnd Point

router.delete('/users/:id', async (req,res) => {
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

module.exports = router