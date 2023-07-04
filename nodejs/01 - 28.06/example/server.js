const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello World????');
});
app.post('/', (req, res) => {
  res.send('Hello World????');
});
app.put('/', (req, res) => {
  res.send('Hello World????');
});
const port = 3001;
app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
