const request = require("request");

const weather_url =
  "http://api.weatherstack.com/current?access_key=869d6b1638121d75975fdcf817629bbd&query=37.8267,-122.4233";

request({ url: weather_url, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to weather service");
  } else if (response.body.error) {
    console.log("Weather API unable to find location");
  } else {
    const temperature = response.body.current.temperature;
    const feels = response.body.current.feelslike;
    const forecast = response.body.current.weather_descriptions[0];
    console.log(
      `${forecast}. It is currently ${temperature} degrees out. It feels like ${feels}% degrees out.`
    );
  }
});

const geo_url =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaGVucmlxdWVtYXp6b2xlbmkiLCJhIjoiY2t1eWVtdDh5NG5sazMzbzZ4cmltZ205ayJ9.Hz27q2a_CH0ccQU--PCG9A&limit=1";

request({ url: geo_url, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to Geolocator service");
  } else if (response.body.features.length === 0) {
    console.log("Geolocator unable to find location");
  } else {
    const name = response.body.features[0].place_name;
    const coords = response.body.features[0].center;
    console.log(
      `${name} is located at ${coords[0]} longitude and ${coords[1]} latitude`
    );
  }
});
