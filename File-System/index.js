
// 1st Lec get value from user using command line

console.log(process.argv);

const command = process.argv[2]

if(command === 'add'){
    console.log('You are added ...!');
}else{
    console.log('Please added some ... !');
}

