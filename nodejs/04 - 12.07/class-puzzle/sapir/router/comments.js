
const express = require('express');
const router = express.Router();

const comments = []; 
let id = 1;

router.post('/', (req, res) => {
  const newComment = {
    ...req.body,
    id,
  };

  id++;
  comments.push(newComment);
  res.status(201).json(newComment);
});

router.delete('/:commentId', (req, res) => {
  const commentId = +req.params.commentId;
  const commentIndex = comments.findIndex((comment) => comment.id === commentId);

  if (commentIndex === -1) {
    return res.status(404).send('Comment not found');
  }

  const deletedComment = comments[commentIndex];
  comments.splice(commentIndex, 1);
  res.status(200).json(deletedComment);
});

module.exports = router;
