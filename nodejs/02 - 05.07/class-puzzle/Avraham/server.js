const express = require('express');
const bodyParser = require('body-parser');
const cors = require(`cors`);
const app = express();

app.use(bodyParser.json());
app.use(cors());


const posts = [];
let id = 1;

app.get('/', (req, res) => {
  res.send(`hello world`);
});

app.get('/', (req, res) => {
  res.send(posts);
});

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/posts', (req, res) => {
  console.log(req.body)
  const newPost ={
    ...req.body,
    id,
  }
  id++

  posts.push(newPost)
  
  res.send(posts);
});

app.delete('/posts/:id',(req,res)=>{
  const postId = +req.params.id;
  const postIndex = posts.findIndex(post => post.id === postId)
  posts.splice(postIndex,1)
  res.send(posts[postIndex])
})
app.use(express.static(`front`)); 

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});







































// app.get(`/posts`,(req,res)=>{
//   res.send(posts);
// })

// app.get('/posts/:id', (req, res) => {
//   const postId = +req.params.id;
//   const post = posts.find(post => post.id === postId)
//   res.send(post);
// });

// app.post('/posts', (req, res) => {
//   console.log(req.body)
//   res.send(posts)
 
// });