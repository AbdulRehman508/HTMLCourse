
// // CRUD system

// // const mongodb = require('mongodb');
// // const MongoClient = mongodb.MongoClient
// // const ObjectID = mongodb.ObjectID;

// //  OR

// const { MongoClient, ObjectID } = require('mongodb');

// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseName = 'task-manager'

// // const id = new ObjectID();
// // console.log(id);
// // console.log(id.getTimestamp());

// MongoClient.connect(connectionURL,{useNewUrlParser: true}, (error,client)=>{
//     if(error){
//         console.log("Your connection is failed ... Please try again")
//     }else{
//         console.log("Connection is correctly ... Wellcome in MongoDB")

//              db = client.db(databaseName)

//             // db.collection('users').deleteMany({
//             //     age: 25 && 26 
//             // }).then((result)=>{
//             //     console.log("Document is Delete .. !" + result)
//             // }).catch((error)=>{
//             //     console.log("Something is wrong .. !" + error)
//             // }) 

//         //  db.collection('users').updateOne({
//         //     _id: new ObjectID('61d806e49be4c7f91df91eb7')
//         // },{
//         //     $inc : {
//         //         age: 1
//         //     }
//         // }).then((result)=>{
//         //     console.log("Document is Update .. !" + result)
//         // }).catch((error)=>{
//         //     console.log("Something is wrong .. !" + error)
//         // })  

//         //  db.collection('users').updateMany({
//         //    age: 31 && 30
//         // },{
//         //     $set : {
//         //         age: 26
//         //     }
//         // }).then((result)=>{
//         //     console.log("Document is Update .. !" + result)
//         // }).catch((error)=>{
//         //     console.log("Something is wrong .. !" + error)
//         // }) 

//         // db.collection('user-details').findOne(
//         //     {
//         //         _id: new ObjectID('61d8174bc667fbbe7b9db7bc'),
//         //     }
//         //     ,(error,user)=>{
//         //         if(error){
//         //             console.log("Unable to Fetch document")
//         //         }else{
//         //             console.log(user);
//         //         }

//         //     }
//         // )

//         // db.collection('user-details').find(
//         //     {
//         //         completed: false
//         //     }).toArray((error,user)=>{
//         //     if(error){
//         //         console.log("Unable to Fetch document")
//         //     }else{
//         //         console.log(user);
//         //     }
//         // })

//         // db.collection('users').insertOne(
//         //         {
//         //             _id: id,
//         //             name:"Furqan Haso",
//         //             address:"Faisalabd",
//         //             age:25.25
//         //         }
//         //     ,(error,result)=>{
//         //         if(error){
//         //             console.log("Unable to insert document")
//         //         }else{
//         //             console.log(result);
//         //         }

//         //     }
//         // )

//         // db.collection('user-details').insertMany([
//         //     {
//         //         name:"Hamza",
//         //         description:"He is an able man",
//         //         completed: true
//         //     },
//         //     {
//         //         name:"Adnan",
//         //         description:"He is an good man",
//         //         completed: true
//         //     },
//         //     {
//         //         name:"Zain",
//         //         description:"He is an Well man",
//         //         completed: false
//         //     }
//         // ],(error,result)=>{
//         //     if(error){
//         //         console.log("Unable to insert document ... !" )
//         //     }else{
//         //         console.log(result)
//         //     }
//         // }
//         // )

//     }

// })
