const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const postsRouter = require('./router/posts')
const path = require('path');


const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('shir'));

app.use(`/posts`, postsRouter);



app.get('/hello-world', (req, res) => {
  res.send('Hello World');
});



app.get('/create-post', (req, res) => {
  const pathToHtml = path.join(__dirname, 'shir', 'create-post.html');
  res.sendFile(pathToHtml);
});



const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});