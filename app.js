const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=869d6b1638121d75975fdcf817629bbd&query=37.8267,-122.4233";

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});
