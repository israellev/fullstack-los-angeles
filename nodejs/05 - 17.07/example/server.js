// imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const postsRouter = require('./router/posts')
const path = require('path');
const mongoose = require('mongoose')
const config = require('./config')

mongoose.connect(config.mongodb.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('connect mongo successfully'))
.catch(error => console.log('error', error))



// create app
const app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());

// 
app.use(express.static('front'));

// router
app.use('/posts', postsRouter);

// routes
app.get('/hello-world', (req, res) => {
  res.send("hello world");
});

app.get('/', (req, res) => {
  console.log(__dirname);
  const pathToHtml = path.join(__dirname, 'front', 'index.html')
  res.sendFile(pathToHtml);
});

app.get('/create-post', (req, res) => {
  const pathToHtml = path.join(__dirname, 'front', 'create-post.html')
  res.sendFile(pathToHtml);
});

// deploy
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
