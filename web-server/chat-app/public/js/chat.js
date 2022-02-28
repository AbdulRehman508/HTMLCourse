// const { isObject } = require("util");

const socket = io();

// socket.on('Count is Update',(count)=>{
//     console.log("The Count is Updated ... !"+ count)
// })

// const increment = document.getElementById("increment");
// increment.addEventListener('click',()=>{
//     console.log("Checked")
//     socket.emit("increment")
// })

socket.on('message',(message)=>{
    console.log(message)
})
const formSubmit = document.getElementById("form-submit");

formSubmit.addEventListener('submit', (e)=>{
    e.preventDefault();
    const message = document.getElementById("message")
    socket.emit("sendMessage",message.value)
    message.value = '';
})