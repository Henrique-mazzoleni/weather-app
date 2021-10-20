const request = require("request");

const geo_api_key =
  "pk.eyJ1IjoiaGVucmlxdWVtYXp6b2xlbmkiLCJhIjoiY2t1eWVtdDh5NG5sazMzbzZ4cmltZ205ayJ9.Hz27q2a_CH0ccQU--PCG9A";

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(
    address
  )}.json?access_token=${geo_api_key}&limit=1`;

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
