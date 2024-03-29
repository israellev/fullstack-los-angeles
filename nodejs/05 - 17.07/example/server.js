// imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const postsRouter = require('./router/posts')
const path = require('path');
const initMongoDb = require('./mongo/mongodb')


initMongoDb()

// create app
const app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('front'));

// routes
app.use('/posts', postsRouter);

app.get('/hello-world', (req, res) => {
  res.send("hello world");
});

app.get('/create-post', (req, res) => {
  const pathToHtml = path.join(__dirname, 'front', 'create-post.html')
  res.sendFile(pathToHtml);
});

// deploy
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
