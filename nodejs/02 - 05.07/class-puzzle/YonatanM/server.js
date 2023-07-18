const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
  res.end('Hello World!!!');
});

// Start the server
server.listen(3000, () => {
  console.log(`Server listening on port ${3000}`);
});