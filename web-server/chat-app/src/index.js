
const express = require("express");
const app = express();
const path = require("path");
const http = require("http")
const server = http.createServer(app);
const { Server} = require("socket.io")
const io = new Server(server);

const port = process.env.PORT || 3000;
const pathDirectory = path.join(__dirname, '../public')

app.use(express.static(pathDirectory)); 

// let count = 0
io.on('connection', (socket)=>{
    console.log("New Web socket connection")

    socket.emit("message","Wellcome ... !")
    // socket.emit('Count is Update',count)
    // socket.on("increment", ()=>{
    //     count ++;
    //     io.emit('Count is Update',count)
    // })
    socket.on("sendMessage",(message)=>{
        io.emit("message",message)
    })
})

server.listen(port,()=>{
    console.log("Port is working ... !" + port);
})


