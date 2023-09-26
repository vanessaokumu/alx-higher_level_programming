#!/usr/bin/node

const request = require('request');
const apiUrl = process.argv[2];
// Make a GET request to the Star Wars API to fetch the films
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else if (response.statusCode === 200) {
    const filmsData = JSON.parse(body).results;

    // Filter the films where "Wedge Antilles" (character ID 18) is present
    const filmsWithWedge = filmsData.results.filter((film) =>
      film.characters.includes('https://swapi-api.alx-tools.com/api/people/18/')
    );

    // Print the number of films with Wedge Antilles
    console.log(`Number of films with Wedge Antilles: ${filmsWithWedge.length}`);
  }
});
