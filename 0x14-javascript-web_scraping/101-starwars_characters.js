#!/usr/bin/node

const request = require('request');
const movieId = process.argv[2];

if (!movieId) {
  console.error('Usage: node movieCharacters.js <movie-id>');
  process.exit(1);
}

const moviesUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request.get(moviesUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  const movieData = JSON.parse(body);

  if (movieData.detail === 'Not found') {
    console.error('Movie not found.');
    return;
  }

  console.log(`Characters in "${movieData.title}":`);
  movieData.characters.forEach((characterUrl) => {
    request.get(characterUrl, (charError, charResponse, charBody) => {
      if (!charError) {
        const characterData = JSON.parse(charBody);
        console.log(characterData.name);
      }
    });
  });
});
