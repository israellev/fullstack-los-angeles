const http = require("http");

// Create an Express application
const app = http();

// Define a route handler for the root path
app.get("/", (req, res) => {
  res.send("Hello World!!!??");
});

// Start the server
const port = 3001;
app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
