const request = require("request");

const weather_api_key = "869d6b1638121d75975fdcf817629bbd";

function forecast(longitude, latitude, callback) {
  const url = `http://api.weatherstack.com/current?access_key=${weather_api_key}&query=${latitude},${longitude}`;

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
