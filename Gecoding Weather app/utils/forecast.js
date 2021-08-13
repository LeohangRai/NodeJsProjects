const request = require('request')

//NOTE
//Callback function format is callback(error, response)
//When error occurs, response must be NULL and vice versa.


//The address arg will be passed and added to the url string
function forecast(address, callback){
    const url = `http://api.weatherstack.com/current?access_key=a95c1c3c9756546f58a6cbbff2028750&query=${address}`

    //json:true makes the req function return the reponse in json format
    request({url:url, json:true}, (error, response) => {
        //Passing undefined as the second arg during errors because the value of response will be NULL when error occurs
        //error handling for physical/system errors
        if (error){
            callback("Cannot connect to the forecast service. Make sure you're connected to the internet.", undefined)
        }
        //error handling for bad response, when the user Input is wrong/bad
        else if (response.body.success === false){
            callback("Oops! Did you type the name of your location correctly? Please type again.", undefined)
        }
        //No error
        else {
            //Grabbing the location, temperature and feelslike values from the JSON response coming through the API
            location = response.body.request.query
            temperature = response.body.current.temperature
            feelslike = response.body.current.feelslike
            //Passing undefined as the first arg, because the value of 'error' must be NULL in this case when the user calls the callback function
            callback(undefined, {'location': location, 'temperature': temperature, 'feelslike': feelslike})
        }
    })
}

module.exports = forecast

//How to use the forecast() function
// forecast('Kathmandu', (error, kathforecast) => {
//     if (error){
//         console.log(error)
//     }
//     else {
//         console.log(kathforecast);
//     }   
// })
