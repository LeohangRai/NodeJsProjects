const request = require('request')

//NOTE
//Callback function format is callback(error, response)
//When error occurs, response must be NULL and vice versa.

function geocode(address, callback){
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoibGVvaGFuZ3JhaSIsImEiOiJja3M1djczZTUwYmNuMnVvZGdvbHlzb2xsIn0.bIwV61voTm0ev1dqgDmCwA`
    
    //json:true makes the req function return the reponse in json format
    request({url:url, json:true}, (error, response) =>{
        //Passing undefined as the second arg during errors because the value of response will be NULL when error occurs
        //error handling for physical/system errors
        if (error){
            callback("Oops! Unable to connect to the Geocode service.\nCheck your Internet connection maybe?", undefined)
        }
        //error handling for bad response, when the user Input is wrong/bad
        else if (response.body.features.length === 0){
            callback("Oops! Did you type the name of your location properly? Try again please.", undefined)
        }
        //No error
        else{
            //Grabbing the latitude, longitude and location values from the JSON response coming through the API
            const latitude = response.body.features[0].center[0]
            const longitude = response.body.features[0].center[1]
            const location = response.body.features[0].place_name
            //Passing undefined as the first arg, because the value of 'error' must be NULL in this case when the user calls the callback function
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

