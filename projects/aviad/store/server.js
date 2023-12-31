const express = require('express');
const dotenv = require('dotenv')
const path = require('path');
const app = express();
const cors = require('cors');
const { MongoClient } = require('mongodb');

// load variables from ".env" file
dotenv.config()

// connect to database
const client = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const database = client.db("test");
try {
    client.connect().then(() => console.log('Connected to MongoDB!'));
} catch (e) {
    console.error(e);
}

// allow interact with the server from other sites
app.use(cors());

// serve all react static files 
app.use(express.static(path.join(__dirname, 'front', 'build')));

app.get('/hello-world', (req, res) => {
    res.send();
});

app.get('/api/products', async (req, res) => {
    const collection = database.collection("products");
    const results = await collection.find().toArray();
    res.send(results);
});

// Start the server
const port = process.env.PORT | 3000;
app.listen(port, () => {
    console.log(`Server is listening on port http://localhost:${port}`);
});

