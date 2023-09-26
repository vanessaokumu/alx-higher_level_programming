#!/usr/bin/node

const request = require('request');

// Check if a movie ID argument is provided
if (process.argv.length !== 3) {
  console.error('Usage: node movieCharacters.js <movie-id>');
  process.exit(1);
}

// Get the movie ID from the command line arguments
const movieId = process.argv[2];

// Define the Star Wars API endpoint for movies
const moviesUrl = 'https://swapi-api.alx-tools.com/api/films/';

// Make a GET request to the Star Wars API to fetch the movie details
request.get(moviesUrl + movieId, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    // Parse the response body as JSON
    const movieData = JSON.parse(body);

    // Check if the movie with the given ID exists
    if (movieData.detail === 'Not found') {
      console.error('Movie not found.');
    } else {
      // Print the characters in the movie in the same order as listed in the film response
      console.log(`Characters in "${movieData.title}":`);
      const characterUrls = movieData.characters;
      const characterNames = [];

      // Function to fetch and print character names
      const fetchAndPrintCharacterNames = (index) => {
        if (index < characterUrls.length) {
          const characterUrl = characterUrls[index];
          // Make a GET request to the character URL to fetch the character details
          request.get(characterUrl, (charError, charResponse, charBody) => {
            if (charError) {
              console.error(charError);
            } else {
              // Parse the character response body as JSON
              const characterData = JSON.parse(charBody);
              characterNames.push(characterData.name);
              fetchAndPrintCharacterNames(index + 1); // Move to the next character
            }
          });
        } else {
          // All character names fetched, print them in order
          characterNames.forEach((name) => {
            console.log(name);
          });
        }
      };

      // Start fetching and printing character names
      fetchAndPrintCharacterNames(0);
    }
  }
});
