// imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// create app
const app = express();
// middleware
app.use(bodyParser.json());
app.use(cors());

const posts = []
let id = 1;//משתנה חדש

// Define a route handler for the root path
app.get('/Hello-Sapir', (req, res) => {
  res.send('Hello, Sapir!');
});

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.get('/posts/:id', (req, res) => {
  const postId = +req.params.id;
  const post = posts.find(post => post.id === postId)
  res.send(post);
});

app.post('/posts', (req, res) => {
  console.log(req.body)
  const newPost = {//משתנה חדש שישים בתוכו את כל מה שיש בגוף ההודעה 
    ...req.body,
    id,
  }//ותוסיף למשתנה הזה את האיידי ובכל קריאה יוסיף 1 
    id++
    posts.push(newPost)//ואז לעשות פוש למערך בשם פוסט שיצרנו למעלה
  res.send(newPost)//ותחזיר למשתמש את הפוסט החדש
});

app.delete('/posts/:id', (req, res)=>{//הפקודה של מחיקה מקבלת את היו אר אל של הפוסטס ואיי די ובנוסף פונקציה שהפרמטרים שלה זה בקשה ותשובה, 
  const postId= +req.params.id;//שליפה של האיי די באמצעות גישה לפרמטרים של הבקשה והפיכה של הסטירנג למספר באמצעות סימן הפלוס
  const postIndex = posts.findIndex((post, i)=> post.id === postId)
  res.send(posts[postIndex])
  posts.splice(postIndex, 1);
});

// middleware
app.use(express.static('front'));

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
