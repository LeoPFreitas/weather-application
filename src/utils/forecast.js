const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/0afe6cb9c7acf11dee04c9a7ec81d693/${latitude},${longitude}?units=si&lang=pt`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' A temperatura é de ' + body.currently.temperature + ' graus. Existe ' + body.currently.precipProbability + '% de chance de chuva.')
        }
    })
}

module.exports = forecast