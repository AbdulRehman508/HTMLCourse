
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

const request = require('request');
const url = "http://api.weatherstack.com/current?access_key=b25f0dab8921bc25dabf05014d5aa1f3";
request({url:url, json: true}, (error,response) => {
       if(!error){
           console.log("Your request is : " + error)
       }else{
           console.log("It is current Temprature  .... " + response.body.current.temperature + " .... Chance of rain " + response.body.current.precip);
       }
})