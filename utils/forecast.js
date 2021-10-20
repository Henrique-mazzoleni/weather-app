const request = require("request");
require("dotenv").config();

function forecast(longitude, latitude, callback) {
  const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API_KEY}&query=${latitude},${longitude}`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (response.body.error) {
      callback("Weather API unable to find location", undefined);
    } else {
      const search_result = response.body.current;
      callback(undefined, {
        forecast: search_result.weather_descriptions[0],
        temperature: search_result.temperature,
        feelsLike: search_result.feelslike,
      });
    }
  });
}

module.exports = forecast;
