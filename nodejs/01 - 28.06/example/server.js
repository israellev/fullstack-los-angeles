const express = require("express");

// Create an Express application
const app = express();

// Define a route handler for the root path
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/api", (req, res) => {
  res.send({ person: "zematch", age: "32" });
});
// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
