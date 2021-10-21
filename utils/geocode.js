require("dotenv").config();
const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(
    address
  )}.json?access_token=${process.env.GEO_API_KEY}&limit=1`;

  request({ url, json: true }, (error, { body }) => {
    const { center, place_name: location } = body.features[0];
    if (error) {
      callback("Unable to connect to Geolocator service.", undefined);
    } else if (body.features.length === 0) {
      callback("Geolocator unable to find location", undefined);
    } else {
      callback(undefined, {
        latitude: center[1],
        longitude: center[0],
        location,
      });
    }
  });
};

module.exports = geocode;
