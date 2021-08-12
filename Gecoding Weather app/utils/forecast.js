const request = require('request')

function forecast(address, callback){
    const url = `http://api.weatherstack.com/current?access_key=a95c1c3c9756546f58a6cbbff2028750&query=${address}`
    request({url:url, json:true}, (error, response) => {
        if (error){
            callback("Cannot connect to the forecast service. Make sure you're connected to the internet.")
        }
        else if (response.body.success === false){
            callback("Oops! Did you type the name of your location correctly? Please type again.")
        }
        else {
            location = response.body.request.query
            temperature = response.body.current.temperature
            feelslike = response.body.current.feelslike
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
