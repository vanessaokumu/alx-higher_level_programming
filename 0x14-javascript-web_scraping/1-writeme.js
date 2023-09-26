#!/usr/bin/node

const fs = require('fs');

// Check if both file path and content arguments are provided
if (process.argv.length !== 4) {
  console.error('Usage: node writefile.js <file-path> <content-to-write>');
  process.exit(1);
}

// Get the file path and content from the command line arguments
const filePath = process.argv[2];
const contentToWrite = process.argv[3];

// Write the content to the file in utf-8 encoding
fs.writeFile(filePath, contentToWrite, 'utf-8', (err) => {
  if (err) {
    console.error(err);
  }
});
