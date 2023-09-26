#!/usr/bin/node

const request = require('request');

// Check if a URL argument is given
if (process.argv.length !== 3) {
  console.error('Usage: node getstatus.js <url>');
  process.exit(1);
}

// Get the URL from the command line arguments
const url = process.argv[2];

// Make a GET request
request.get(url, (error, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`code: ${response.statusCode}`);
  }
});
