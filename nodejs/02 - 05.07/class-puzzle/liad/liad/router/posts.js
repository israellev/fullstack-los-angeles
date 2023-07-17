const express = require('express');
const router = express.Router();
// Create an Express application

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors())

const posts = []
let id = 1
// Define a route handler for the root path
router.get('/hello-world', (req, res) => {
  res.send('Hello, liad!');
});

router.get('/', (req, res) => {
  res.send(posts);
});

app.post('/', (req, res) => {
  console.log(req.body)
  const newPost = {
    ...req.body,
    id,
  }
  id++
  posts.push(newPost)
  res.send(newPost);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.use(express.static('liad'))

app.delete('//:id', (req, res) => {
  const postId = +req.params.id;
  const postIndex = posts.findIndex(post => post.id === postId);
  res.send(posts[postIndex])
  posts.splice(postIndex, 1);
})

module.exports = router

const postsRouter = require('./router/posts')
//router
app.use('/posts', postsRouter);