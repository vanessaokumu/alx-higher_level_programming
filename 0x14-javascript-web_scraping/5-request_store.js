#!/usr/bin/node

const request = require('request');
const fs = require('fs');

// Check if both URL and file path arguments are provided
if (process.argv.length !== 4) {
  console.error('Usage: node fetchAndStore.js <url> <file-path>');
  process.exit(1);
}

// Get the URL and file path from the command line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Make a GET request to the specified URL
request.get(url, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    // Write the response body to the specified file in utf-8 encoding
    fs.writeFile(filePath, body, 'utf-8', (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
});
