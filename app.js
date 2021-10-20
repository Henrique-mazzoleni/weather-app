const forecast = require("./utils/forecast");
const geocode = require("./utils/geocode");

if (process.argv[2]) {
  geocode(process.argv[2], (error, data) => {
    if (error) return console.log(error);
    forecast(data.longitude, data.latitude, (error, forecastData) => {
      if (error) return console.log(error);
      console.log(data.location);
      console.log(
        `${forecastData.forecast}. It is ${forecastData.temperature} degrees and it feels like ${forecastData.feelsLike} degrees`
      );
    });
  });
} else {
  console.log("Must enter location to get weather forecast");
}
