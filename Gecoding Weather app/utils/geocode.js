const request = require('request')


function geocode(address, callback){
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoibGVvaGFuZ3JhaSIsImEiOiJja3M1djczZTUwYmNuMnVvZGdvbHlzb2xsIn0.bIwV61voTm0ev1dqgDmCwA`
    request({url:url, json:true}, (error, response) =>{
        if (error){
            //passing undefined as second arg for callback because when error occurs the response will be undefined
            callback("Oops! Unable to connect to the Geocode service.\nCheck your Internet connection maybe?", undefined)
        }
        else if (response.body.features.length === 0){
            //passing undefined as second arg because of the same reason as above
            callback("Oops! Did you type the name of your location properly? Try again please.", undefined)
        }
        else{
            //passing undefined as first arg of the callback because it the error will be NULL when the response is obtained
            const latitude = response.body.features[0].center[0]
            const longitude = response.body.features[0].center[1]
            const location = response.body.features[0].place_name
            callback(undefined, {'latitude': latitude, 'longitude':longitude, 'location': location})
        }
    })

}

module.exports = geocode;

//How to use this function
// geocode("Kathmandu", (error, latlong) => {
//     if (error){
//         console.log(error);
//     }
//     else {
//         console.log(latlong);
//     }
// })

