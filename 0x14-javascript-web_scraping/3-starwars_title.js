#!/usr/bin/node

const request = require('request');

// Check if a movie ID argument is provided
if (process.argv.length !== 3) {
  console.error('Usage: node getswmovie.js <movie-id>');
  process.exit(1);
}

// Get the movie ID from the command line arguments
const movieId = process.argv[2];

// Define the Star Wars API endpoint
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Make a GET request to the Star Wars API
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const movieData = JSON.parse(body);

    // Check if the movie with the given ID exists
    if (movieData.detail === 'Not found') {
      console.error('Movie not found.');
    } else {
      // Print the title of the movie
      console.log(`Title: ${movieData.title}`);
    }
  }
});
