// imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// create an Express application
const app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());

// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const posts = []


app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/posts', (req, res) => {
  console.log(req.body)
  res.send(posts);
});


// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});