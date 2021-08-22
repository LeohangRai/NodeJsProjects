const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')
const address = process.argv[2]
const chalk = require('chalk')

// geocode("Kathmandu", (err, response) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(response);
//     }
// })

//If the address/location is provided as an argument in CLI
if (address) {
    //Forecasting the weather of the location grabbed from CLI
    forecast(address, (error, forecastData) => {
        if (error) {
            console.log(error)
        }
        else {
            console.log(forecastData);
        }
    })
}
else {
    console.log(chalk.red("Please enter a location."))
}