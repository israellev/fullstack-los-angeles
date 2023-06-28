const express = requ('express');

// Create the Express app
const app = express();

// Define a route
app.get('/', (req, res) => {
  res.send('Hello Avraham');
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
