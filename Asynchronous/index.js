
// 1st Asynchronous Basic

    // console.log('Starting ')
    // setTimeout(()=>{
    //     console.log('After 2 second')
    // },2000)
    // console.log('stopping')

// 2nd call stack, call back queue & event loop

// 3rd Making Http request

 const request = require('request');

 const url = "http://api.weatherstack.com/current?access_key=b25f0dab8921bc25dabf05014d5aa1f3&query=37.8267,-122.4233";

 request({url:url, json: true}, (error,response) => {
        console.log("It is current Temprature  .... " + response.body.current.temperature + " .... Chance of rain " + response.body.current.precip);
    //  const data = JSON.parse(response.body)
    //  console.log(data.current);
 })
