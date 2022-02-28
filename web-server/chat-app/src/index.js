
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

io.on('connection', ()=>{
    console.log("New Web socket connection")
})

server.listen(port,()=>{
    console.log("Port is working ... !" + port);
})


