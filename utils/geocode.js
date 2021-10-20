require("dotenv").config();
const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(
    address
  )}.json?access_token=${process.env.GEO_API_KEY}&limit=1`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to Geolocator service.", undefined);
    } else if (response.body.features.length === 0) {
      callback("Geolocator unable to find location", undefined);
    } else {
      const search_result = response.body.features[0];
      callback(undefined, {
        latitude: search_result.center[1],
        longitude: search_result.center[0],
        location: search_result.place_name,
      });
    }
  });
};

module.exports = geocode;
