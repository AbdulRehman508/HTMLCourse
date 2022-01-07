
// CRUD system

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL,{useNewUrlParser: true}, (error,client)=>{
    if(error){
        console.log("Your connection is failed ... Please try again")
    }else{
        console.log("Connection is correctly ... Wellcome in MongoDB")

        const db = client.db(databaseName)

        db.collection('users').insertOne(
            {
                name:"Afzal",
                address:"Faisalabd",
                age:24
            }
        )


    }

})
