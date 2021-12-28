
// 1st Lec get value from user using command line

    // console.log(process.argv);
    // const command = process.argv[2]
    // if(command === 'add'){
    //     console.log('You are added ...!');
    // }else{
    //     console.log('Please added some ... !');
    // }

// 2nd Lec Argument Parsing with Yargs Part I

    const yargs = require("yargs");

    yargs.command({
        command: 'add',
        describe: 'Add a new note',
        handler: function(){
            console.log('Adding a new notes .. !')
        }
    })
    yargs.command({
        command: 'remove',
        describe: 'Remove a note',
        handler: function(){
            console.log('Removing a notes .. !')
        }
    })
    yargs.command({
        command: 'list',
        describe: 'List Your note',
        handler: function(){
            console.log('Listing a notes .. !')
        }
    })
    yargs.command({
        command: 'read',
        describe: 'Read a note',
        handler: function(){
            console.log('Read a notes .. !')
        }
    })
    console.log(yargs.argv);