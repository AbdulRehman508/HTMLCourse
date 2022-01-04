
const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()

const publicDictectories = path.join(__dirname,'../public');
const viewDictectories = path.join(__dirname,'../templates/views');
const partialPaths = path.join(__dirname,'../templates/partials')

hbs.registerPartials(partialPaths);
app.set('views',viewDictectories);
app.set('view engine','hbs')

app.use(express.static(publicDictectories));

app.get('',(req, res) => {
    res.render('index',{
        name:'Home',
        // Address: "Faisalabad"
    });
})
app.get('/about',(req, res) => {
    res.render('about',{
        name:'About',
        // Address: "Lahore"
    });
})
// app.get('',(req,res)=>{
//     res.send('<h1>Wellcome in Express Server ..!</h1>')
// })

// app.get('/help',(req,res)=>{
//     res.send('<h1>What are the help of serve ..!</h1>')
// })
// app.get('/about',(req,res)=>{
//     res.send([
//         {
//             name:'Abdul Rehman',
//             contact: '+92 313-7313-612'
//         },
//         {
//             name:'Ehtisham-ul-Haq',
//             contact: '+92 343-1790-676'
//         }
        
//     ])
// })
// app.get('/help/contact',(req,res)=>{
//     res.send('<h1>Contact of expressjs serve : +1 02354 786 ..!</h1>')
// })

app.listen(2000);