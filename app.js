const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=869d6b1638121d75975fdcf817629bbd&query=37.8267,-122.4233";

request({ url: url, json: true }, (error, response) => {
  const temperature = response.body.current.temperature;
  const feels = response.body.current.feelslike;
  const forecast = response.body.current.weather_descriptions[0];
  console.log(
    `${forecast}. It is currently ${temperature} degrees out. It feels like ${feels}% degrees out.`
  );
});
