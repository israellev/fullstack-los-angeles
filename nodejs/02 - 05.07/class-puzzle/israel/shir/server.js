const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('Hello World');
});

const posts= []
let id=1;

app.get(`/posts`,(req,res) => {
    res.send(posts)
});

app.get('/posts/:id', (req, res) => {
  const postId = +req.params.id;
  const post = posts.find(post => post.id === postId)
  res.send(post);
});

app.post(`/posts`,(req,res) => {
  console.log(req.body)
  res.send(posts)
  const newPost= {
    ...req.body,
    id,
  }
  id ++
  posts.push(newPost)
  res.send(newPost)
});

app.delete('/posts/:id', (req, res) => {
  const postId = +req.params.id;
  const postIndex = posts.findIndex(post => post.id === postId);
  res.send(posts[postIndex])
  posts.splice(postIndex, 1);
})


const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});