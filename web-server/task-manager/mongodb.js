
// CRUD system

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID;

//  OR

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID();
console.log(id);
console.log(id.getTimestamp());

MongoClient.connect(connectionURL,{useNewUrlParser: true}, (error,client)=>{
    if(error){
        console.log("Your connection is failed ... Please try again")
    }else{
        console.log("Connection is correctly ... Wellcome in MongoDB")

        const db = client.db(databaseName)

        db.collection('users').insertOne(
                {
                    _id: id,
                    name:"Furqan Haso",
                    address:"Faisalabd",
                    age:25.25
                }
            ,(error,result)=>{
                if(error){
                    console.log("Unable to insert document")
                }else{
                    console.log(result);
                }

            }
        )

        // db.collection('user-details').insertMany([
        //     {
        //         name:"Hamza",
        //         description:"He is an able man",
        //         completed: true
        //     },
        //     {
        //         name:"Adnan",
        //         description:"He is an good man",
        //         completed: true
        //     },
        //     {
        //         name:"Zain",
        //         description:"He is an Well man",
        //         completed: false
        //     }
        // ],(error,result)=>{
        //     if(error){
        //         console.log("Unable to insert document ... !" )
        //     }else{
        //         console.log(result)
        //     }
        // }
        // )

    }

})
