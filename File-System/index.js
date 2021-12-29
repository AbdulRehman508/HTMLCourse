
// 1st Lec get value from user using command line

    // console.log(process.argv);
    // const command = process.argv[2]
    // if(command === 'add'){
    //     console.log('You are added ...!');
    // }else{
    //     console.log('Please added some ... !');
    // }

// 2nd Lec Argument Parsing with Yargs Part I

    // const yargs = require("yargs");

    // yargs.command({
    //     command: 'add',
    //     describe: 'Add a new note',
    //     handler: function(){
    //         console.log('Adding a new notes .. !')
    //     }
    // })
    // yargs.command({
    //     command: 'remove',
    //     describe: 'Remove a note',
    //     handler: function(){
    //         console.log('Removing a notes .. !')
    //     }
    // })
    // yargs.command({
    //     command: 'list',
    //     describe: 'List Your note',
    //     handler: function(){
    //         console.log('Listing a notes .. !')
    //     }
    // })
    // yargs.command({
    //     command: 'read',
    //     describe: 'Read a note',
    //     handler: function(){
    //         console.log('Read a notes .. !')
    //     }
    // })
    // console.log(yargs.argv);

// 3rd Lec Argument Parsing with Yargs Part 2

    //  const yargs = require("yargs");

    // yargs.command({
    //     command: 'add',
    //     describe: 'Add a new note',
    //     builder:{
    //         title:{
    //             describe:'Note Title ... !',
    //             demandOption: true,
    //             type:'string',
    //         },
    //         body:{
    //             describe:'Note Body ... !',
    //             demandOption: true,
    //             type:'string',
    //         }
    //     },
    //     handler: function(argv){
    //         console.log("Title:" + argv.title);
    //         console.log("Body:" + argv.body);
    //         // console.log('Adding a new notes .. !',argv)
    //     }
    // })
    // yargs.command({
    //     command: 'remove',
    //     describe: 'Remove a note',
    //     handler: function(){
    //         console.log('Removing a notes .. !')
    //     }
    // })
    // yargs.command({
    //     command: 'list',
    //     describe: 'List Your note',
    //     handler: function(){
    //         console.log('Listing a notes .. !')
    //     }
    // })
    // yargs.command({
    //     command: 'read',
    //     describe: 'Read a note',
    //     handler: function(){
    //         console.log('Read a notes .. !')
    //     }
    // })
    // yargs.parse();

// 4th Lec Storing Data with JSON

    // const fs = require('fs');

    // // const book = 
    // //     {
    // //     title: 'Information Teachnology',
    // //     author: 'Abdul Rehman'
    // //     }
       
    //   const person = 
    //     {
    //        name:"Mathew",
    //        planet:"Plato",
    //        age: 25, 
    //     // title: 'Information Teachnology',
    //     // author: 'Abdul Rehman'
    //     }

    // const jsonData = JSON.stringify(person);
    // fs.writeFileSync('book.json',jsonData);
    // const dataBuffer = fs.readFileSync('book.json');
    // const dataJson = dataBuffer.toString();
    // const data = JSON.parse(dataJson);
    // console.log(data.name);

// 5th & 6th Lec Adding / removing a Note

    // const notes = require('./addNotes.js')
    // const yargs = require("yargs");

    // yargs.command({
    //     command: 'add',
    //     describe: 'Add a new note',
    //     builder:{
    //         title:{
    //             describe:'Note Title ... !',
    //             demandOption: true,
    //             type:'string',
    //         },
    //         body:{
    //             describe:'Note Body ... !',
    //             demandOption: true,
    //             type:'string',
    //         }
    //     },
    //     handler: function(argv){
    //         notes.addNote(argv.title, argv.body);
    //     }
    // })
    //     yargs.command({
    //     command: 'remove',
    //     describe: 'Remove a note',
    //     builder:{
    //         title:{
    //             describe:'Note Title ... !',
    //             demandOption: true,
    //             type:'string',
    //         }
    //     },
    //     handler: function(argv){
    //        notes.removeNotes(argv.title);
    //     }
    // })
    //     yargs.command({
    //     command: 'read',
    //     describe: 'Read a note',
    //     handler: function(){
    //        notes.loadNotes();
    //     }
    // })
    // yargs.parse();

// 7th Lec Arrow Function

    const square = (x) => x + x;
    console.log(square(5));

    const event = {
        name :'Angular Developer',
        developerList: ['Mamo','Afzal','Hamza','Abdul Rehman'],
        printName: function(){
            console.log("Abdul Rehman is a ? ..." + this.name),
            this.developerList.forEach(element => {
                console.log(element + " is Web Developer ...!")
            })
        }

    }
    event.printName()

    const tasks = {
        tasks: [
            {
                name : 'Abdul Rehman',
                complete : true
            },
            {
                name : 'Mamo',
                complete : false
            },
            {
                name : 'Afzal', 
                complete : false
            }
        ],
        getIncompleteTask(){
           return this.tasks.filter(item => item.complete === false)
            
        }
    }
    console.log(tasks.getIncompleteTask())