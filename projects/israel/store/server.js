const express = require('express');
// load variables from ".env" file
require('dotenv').config()
const path = require('path');
const cors = require('cors');
const multer = require('multer');
const bodyParser = require('body-parser');
const { mongodb } = require('./services/mongodb');
const { storage } = require('./services/storage');

const app = express();

// allow interact with the server from other sites
app.use(cors());
// serve all react static files 
app.use(express.static(path.join(__dirname, 'front', 'build')));
// Use body-parser middleware to parse JSON data
app.use(bodyParser.json());

const fileUploads = multer.memoryStorage();
const upload = multer({ storage: fileUploads });

app.get('/hello-world', (req, res) => {

    res.send('hello world!');
});

app.get('/api/products', async (req, res) => {
    const productList = await mongodb.getProdctList()
    res.send(productList);
});

app.post('/api/products', upload.single('image'), async (req, res) => {
    try {
        const { name, price } = req.body;
        const image = req.file;
        const image_url = await storage.uploadFile(image.originalname, image.buffer)
        const newProdct = await mongodb.addNewProdct({ name, price, image_url })
        res.send(newProdct)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
      }
})

app.delete('/api/products/:product_id', async (req, res) => {
    const id = req.params.product_id;
    const deletedProduct = await mongodb.deleteProdct(id)
    res.send(deletedProduct);
});


// Start the server
const port = process.env.PORT | 3000;
app.listen(port, () => {
    console.log(`Server is listening on port http://localhost:${port}`);
});

