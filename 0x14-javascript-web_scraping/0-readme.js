#!/usr/bin/node

#!/usr/bin/node
const fs = require('fs');

// Read the content of the file in utf-8 encoding
fs.readFile(process.argv[2], 'utf8', function (error, content) {
  console.log(error || content);
});
