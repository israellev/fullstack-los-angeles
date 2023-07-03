const express = require('express');

// Create an Express application
const app = express();

// Define a route handler for the root path
app.get('/hello', (req, res) => {
  res.send('Hello!');
});
app.get('/', (req, res) => {
  res.send('Hello World!!!');
});

// Start the server
const port = 3001;
app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
