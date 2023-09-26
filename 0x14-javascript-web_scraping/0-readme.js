#!/usr/bin/node

const fs = require('fs');

// file path from the command line arguments
const filePath = process.argv[2];

// Read the content of the file in utf-8 encoding
fs.readFile(filePath, 'utf-8', function (err, data) {
  if (err) {
    console.error(err);
  } else {
    console.log('File content:');
    console.log(data);
  }
});
