#!/usr/bin/node

const request = require('request');

// Get the movie ID from the command line arguments
const movieId = process.argv[2];

// Define the Star Wars API endpoint for movies
const moviesUrl = 'https://swapi-api.alx-tools.com/api/films/';

// Make a GET request to the Star Wars API to fetch the movie details
request.get(moviesUrl + movieId, (error, response, body) => {
  if (error) {
    console.error(error);
  } else if (response.statusCode === 200) {
    const responseJSON = JSON.parse(body);
    order(responseJSON.characters, 0);
  } else {
    console.log('error occurred, Status code: ' + response.statusCode);
  }
});
