//import
const express = require("express");
const bodyParser = require("body-parser");
const cors = require(`cors`);
const postRouter = require("./router/posts");

// Create an Express application
const app = express();
// middleware
app.use(bodyParser.json());
app.use(cors());

app.get("/hello-world", (req, res) => {
  res.send("Hello World??");
});

app.use(express.static("front"));
app.use("/posts", postRouter);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
