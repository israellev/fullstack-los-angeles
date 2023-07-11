const express = require('express');
const bodyParser = require('body-parser');
const cors = require(`cors`);
const postRouter = require(`./router/posts`);

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(`/posts`,postRouter)

app.use(express.static("front"));

app.get('/', (req, res) => {
  res.send(`hello world`);
});

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