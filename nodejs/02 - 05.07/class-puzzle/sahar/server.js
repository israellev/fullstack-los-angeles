const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const postsRouter = require('./router/posts-router')

// Create an Express application
const app = express();
// middleware
app.use(bodyParser.json());
app.use(cors());

app.get('/hello-world', (req, res) => {
  res.send('Hello, World!');
});

//router
app.use('/posts', postsRouter);

// middleware
app.use(express.static('front'));

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});

