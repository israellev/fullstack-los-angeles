const express = require('express');
const bodyParser = require('body-parser');
const cors = require(`cors`);
const postRouter = require(`./router/posts`);
const initMongoDb = require('./mongo/mongodb')

initMongoDb()

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(`/posts`,PostRouter)

app.use(express.static("front"));

app.get('/', (req, res) => {
  res.send(`hello world`);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});







































