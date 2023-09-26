#!/usr/bin/node

const request = require('request');
const episodeNumber = process.argv[2];
const apiURL = 'https://swapi-api.hbtn.io/api/films/';

// Make a GET request to the Star Wars API
request(apiURL + episodeNumber, function (err, response, body) {
  if (err) {
    console.log(err);
  } else if (response.statusCode === 200) {
    const responseJSON = JSON.parse(body);
    console.log(responseJSON.title);
  } else {
    console.log('Error code, not found: ' + response.statusCode);
  }
});
