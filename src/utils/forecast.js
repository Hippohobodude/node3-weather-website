const request = require('request')
const forecast = (lat, long, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=faeba9b4adac1f59b149b8d904856764&query=' + lat + ',' + long + '&units=f'
  request({url, json:true}, (error, {body})=> {
    if (error){
      callback('Unable to fetch weather data')
    } else if (body.error) {
      callback('There was a location error')
    } else {
      callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out. The humidity is ${body.current.humidity}`)
    }
  } )
}

module.exports = forecast
