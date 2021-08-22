# Geocoding weather app with CLI based input for location
This is a weather forecasting app which shows the current temperature of any location you enter into the terminal.
This app makes use of the Mapbox api for geocoding location into their coordinates and weatherstack api to forecast the weather.
The weatherstack api can directly take in a location 'string' to send the weather information of that location, so there is actually no need to geocode at all.

## Installation
Just run "npm install" to install the necessary dependencies.
## How to use 
$ node app "Location"
