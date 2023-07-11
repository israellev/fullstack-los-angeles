const express = require('express');
const router = express.Router();


const posts = [];
let id = 1;

router.get('/', (req, res) => {
    res.send(posts);
  });
  
router.post('/', (req, res) => {
    console.log(req.body)
    const newPost ={
      ...req.body,
      id,
    }
    id++
  
    posts.push(newPost)
    
    res.send(posts);
  });
  
router.delete('/:id',(req,res)=>{
    const postId = +req.params.id;
    const postIndex = posts.findIndex(post => post.id === postId);
    res.send(posts[postIndex]);
    posts.splice(postIndex,1)
  })

module.exports = router