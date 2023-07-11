const express = require('express');
const router = express.Router();

const posts = []
let id = 1;

router.get('/', (req, res) => {
    res.send(posts);
});

router.get('/:id', (req, res) => {
 const postId = +req.params.id;
 const post = posts.find(post => post.id === postId)
 res.send(post);
});

router.post('/posts', (req, res) => {
 console.log(req.body)
 const newPost = {//משתנה חדש שישים בתוכו את כל מה שיש בגוף ההודעה 
    ...req.body,
    id,
}//ותוסיף למשתנה הזה את האיידי ובכל קריאה יוסיף 1 
id++
 posts.push(newPost)//ואז לעשות פוש למערך בשם פוסט שיצרנו למעלה
 res.send(newPost)//ותחזיר למשתמש את הפוסט החדש
 });
  
router.delete('/posts/:id', (req, res)=>{//הפקודה של מחיקה מקבלת את היו אר אל של הפוסטס ואיי די ובנוסף פונקציה שהפרמטרים שלה זה בקשה ותשובה, 
    const postId= +req.params.id;//שליפה של האיי די באמצעות גישה לפרמטרים של הבקשה והפיכה של הסטירנג למספר באמצעות סימן הפלוס
    const postIndex = posts.findIndex((post, i)=> post.id === postId)
    res.send(posts[postIndex])
    posts.splice(postIndex, 1);
  });

module.exports = router