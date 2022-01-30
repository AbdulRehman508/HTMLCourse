
const express = require("express");
require('./db/mongoose')

const userRouter = require('./router/user.js')
const taskRouter = require('./router/task.js')

const app = express();
const port = process.env.PORT || 3000

// const multer = require('multer');
// const upload = multer({
//     dest: 'images'
// })
// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send();
// })
// app.use((req,res,next) => {
//     console.log(req.method,req.path)
//     next()
// })

app.use(express.json())
app.use(userRouter);
app.use(taskRouter);


app.listen(port, ()=>{
    console.log('Port is working .. !' + port);
})