//imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const postsRouter = require('./router/posts')
const path = require('path');
const initMongodb = require('./mongo/mongodb');

initMongodb()

// Create an Express application
const app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('front'));

//router
app.use('/posts', postsRouter);


app.get('/', (req, res) => {
  const pathToHtml = path.join(__dirname, 'front', 'index.html')
  console.log(__dirname)
  res.sendFile(pathToHtml)
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});

