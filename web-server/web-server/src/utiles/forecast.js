 
 const request = require('request');

 const foreCast = (latitue,longitude,callback)=>{
     const url = 'http://api.weatherstack.com/current?access_key=b25f0dab8921bc25dabf05014d5aa1f3&query=' + latitue + ',' + longitude + '&units=f';
     request({url:url, json: true}, (error,response) => {
        if(error){
            callback("Your Value is :" + error);
        }
        else if(response.body.error){
            callback('Unable to location ..! Please try another', undefined)
        }else{
            callback(undefined, 'Current Temp is :' + response.body.current.temperature)
        }
    })
 }

 module.exports =
 {
    foreCast
 }