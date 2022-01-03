
const express = require('express')
const app = express()

app.get('',(req,res)=>{
    res.send('<h1>Wellcome in Express Server ..!</h1>')
})

app.get('/help',(req,res)=>{
    res.send('<h1>What are the help of serve ..!</h1>')
})
app.get('/about',(req,res)=>{
    res.send('<h1>Most popular server!</h1>')
})
app.get('/help/contact',(req,res)=>{
    res.send('<h1>Contact of expressjs serve : +1 02354 786 ..!</h1>')
})

app.listen(2000);