const request = require('request');
//  const geocoding = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWJkdWxyZWhtYW4wMDEiLCJhIjoiY2t4dTFsaThkNXJicjJ1c3Rqem8zb3d6NiJ9.bM1KrM9k5K_U9EkYkXwmuw&limit=1"
//  request({ url: geocoding, json:true},(error,response) => {
//         const latitude = response.body.features[0].center[1];
//         const longitude = response.body.features[0].center[0]; 
//         console.log(latitude,longitude);
//  })

const geoCode = (address,callback) => {

    const geocoding = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1IjoiYWJkdWxyZWhtYW4wMDEiLCJhIjoiY2t4dTFsaThkNXJicjJ1c3Rqem8zb3d6NiJ9.bM1KrM9k5K_U9EkYkXwmuw&limit=1'
    
    request({url:geocoding, json:true},(error,responce) => {
        if(error){
            callback("Your Value is :" + error);
        }else if(responce.body.features.length === 0){
            callback('Unable to location ..! Please try another1', undefined)
        }else{
            callback(undefined,{
                latitude: responce.body.features[0].center[0],
                longtitude: responce.body.features[0].center[1],
                Location: responce.body.features[0].place_name
            })
        }
    })
}

module.exports = 
{
    geoCode
} 