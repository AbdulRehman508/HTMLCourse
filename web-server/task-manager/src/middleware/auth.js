
const jwt = require('jsonwebtoken')
const createUser = require('../model/models')

const auth = async (req, res, next) => {

    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, 'thisismynewcourse')
        const user = await createUser.findOne({ _id: decoded._id, 'tokens.token': token })
        
        if(!user){
            throw new Error()
        }

        req.user = user
        next()
        console.log(req.user)
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' })
    }
}

module.exports = {
    auth
}