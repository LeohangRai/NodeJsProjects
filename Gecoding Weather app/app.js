const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')


 geocode("Kathmandu", (err, response) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(response);
    }
})



// forecast('Kathmandu', (error, kathforecast) => {
//     if (error){
//         console.log(error)
//     }
//     else {
//         console.log(kathforecast);
//     }   
// })