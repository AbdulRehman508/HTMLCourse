
// 1st Asynchronous Basic

    // console.log('Starting ')
    // setTimeout(()=>{
    //     console.log('After 2 second')
    // },2000)
    // console.log('stopping')

// 2nd call stack, call back queue & event loop

// 3rd & 4th Making Http request

//  const request = require('request');

//  const url = "http://api.weatherstack.com/current?access_key=b25f0dab8921bc25dabf05014d5aa1f3&query=37.8267,-122.4233";

//  request({url:url, json: true}, (error,response) => {
//         console.log("It is current Temprature  .... " + response.body.current.temperature + " .... Chance of rain " + response.body.current.precip);
//     //  const data = JSON.parse(response.body)
//     //  console.log(data.current);
//  })

// 5th Http Request geocoding

//  const request = require('request');
//  const geocoding = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWJkdWxyZWhtYW4wMDEiLCJhIjoiY2t4dTFsaThkNXJicjJ1c3Rqem8zb3d6NiJ9.bM1KrM9k5K_U9EkYkXwmuw&limit=1"

//  request({ url: geocoding, json:true},(error,response) => {
//         const latitude = response.body.features[0].center[1];
//         const longitude = response.body.features[0].center[0]; 
//         console.log(latitude,longitude);
//  })

// 6th Error Handling

// const request = require('request');
// const url = "http://api.weatherstack.com/current?access_key=b25f0dab8921bc25dabf05014d5aa1f3";
// request({url:url, json: true}, (error,response) => {
//        if(!error){
//            console.log("Your request is : " + error)
//        }else{
//            console.log("It is current Temprature  .... " + response.body.current.temperature + " .... Chance of rain " + response.body.current.precip);
//        }
// })

// 7th The Callback function

    // setTimeout(() => {
    //     console.log("After 2 second .. !")
    //     getName()
    // },2000)
    
    // const getName = () =>{
    //     setTimeout(() => {
    //         const userName = ['Jess','Jam','Deblu Tee','Gill']
    //         userName.filter(name =>{
    //             if(name.length <= 4){
    //                 console.log("Name is : " + name);
    //             }
                
    //         })
    //     },2000)
    // }

// 8th The Callback Abstraction

//  const request = require('request');
//  const geocoding = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWJkdWxyZWhtYW4wMDEiLCJhIjoiY2t4dTFsaThkNXJicjJ1c3Rqem8zb3d6NiJ9.bM1KrM9k5K_U9EkYkXwmuw&limit=1"

//  request({ url: geocoding, json:true},(error,response) => {
//         const latitude = response.body.features[0].center[1];
//         const longitude = response.body.features[0].center[0]; 
//         console.log(latitude,longitude);
//  })

// const geoCode = (Callback) => {

//     const geocoding = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWJkdWxyZWhtYW4wMDEiLCJhIjoiY2t4dTFsaThkNXJicjJ1c3Rqem8zb3d6NiJ9.bM1KrM9k5K_U9EkYkXwmuw&limit=1"
    
//     request({url:geocoding, json:true},(error,responce) => {
//         if(!error){
//             Callback("Your Value is :" + error);
//         }else{
//             Callback(undefined,{
//                 latitude: responce.body.features[0].center[1],
//                 longtitude: responce.body.features[0].center[1],
//                 Location: responce.body.features[0].center[1]
//             })
//         }
//     })
// }
// geoCode((error,data)=>{
//     console.log("Error", error);
//     console.log("Data", data);
// })

// 9th ES6 Aside Object Property Shorthand and Destructuring

    // Object Property Shorthand
   
        const name = "Abdul Rehman"
        const ageOf = 24 

        const user = {
                name,
                ageOf
        }
        console.log(user);

    // Object Property Destructuring

        const product = {
            label: 'Queen star product',
            name: 'Popcop',
            salePrice: 10
        }
        // 1st way
            const label = product.label   
        // OR
            console.log(product.label);
        // 2nd way
            const {label, name} = product;
            console.log('Lable:',label)
            console.log('Name:',name);

        // 3rd way

        const productLunch = (order , {label,name}) =>{
              console.log(order),
              console.log(label),
              console.log(name)  
        }
            productLunch('00123RGB',product);
