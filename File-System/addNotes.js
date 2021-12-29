
const fs = require('fs');
const addNote = function(title, body){
    const notes = loadNotes()
    const duplicateData = notes.filter(function(notes){
        return notes.title === title
    })
    if(duplicateData.length === 0){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes);
        console.log("Your note is added ... !");
    }else{
        console.log("Your note is already exist ... !");
    }
    
}
const removeNotes = function(title){
   const notes = loadNotes()
   const dataToKeep = notes.filter(function(notes){
       return notes.title !== title;
   })
   saveNotes(dataToKeep);
}
const saveNotes = function(notes){
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJson);
}
const loadNotes = function(){
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
}

    
module.exports = {
    addNote: addNote,
    removeNotes: removeNotes,
    loadNotes: loadNotes
}