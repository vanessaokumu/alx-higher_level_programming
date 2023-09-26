#!/usr/bin/node

const fs = require('fs');

// Check if a file path argument is provided
if (process.argv.length !== 3) {
  console.error('Usage: node readfile.js <file-path>');
  process.exit(1);
}

// file path from the command line arguments
const filePath = process.argv[2];

// Read the content of the file in utf-8 encoding
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log('File content:');
    console.log(data);
  }
});
