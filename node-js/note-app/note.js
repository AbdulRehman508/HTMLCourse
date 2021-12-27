console.log("wellcome in node.js")
name = "Abdul Rehman";

function add(a,b){
    return a+b;
}

function getNote(){
    return "Your Note is ... !";
}

function postValue(){
    return "Your value is post .. !";
}

module.exports = {
    add,getNote,postValue
};