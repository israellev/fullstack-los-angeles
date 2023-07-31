const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain')

  res.end('Hello World!!!');
});

const port = 3001;
// Start the server
server.listen(port, () => {
  console.log(`Server listening on port ${3001}`);
});