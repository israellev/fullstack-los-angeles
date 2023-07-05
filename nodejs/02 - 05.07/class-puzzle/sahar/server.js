const express = require('express');

// Create an Express application
const app = express();
const posts = [];

// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/posts', (req, res) => {
  res.send(posts);
});


// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

