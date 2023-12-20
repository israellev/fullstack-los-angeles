const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.static(path.join(__dirname, 'front', 'build')));

const products = [
    {
        name: "סודות העמק",
        image_url:
        "https://tamarbakfar.co.il/wp-content/uploads/2020/11/%D7%A1%D7%95%D7%93%D7%95%D7%AA-%D7%94%D7%A2%D7%9E%D7%A7-300x300.jpg",
        price: 12,
    },
    {
        name: "אבקת מרק בצל טבעית",
        image_url:
        "https://tamarbakfar.co.il/wp-content/uploads/2020/11/IMG_2478-300x300.jpg",
        price: 13,
    },
    {
        name: "אבקת מרק טבעית",
        image_url:
            "https://tamarbakfar.co.il/wp-content/uploads/2020/11/IMG_2475-300x300.jpg",
            price: 13,
        },
        {
            name: "אבקת מרק פטריות טבעית",
            image_url:
            "https://tamarbakfar.co.il/wp-content/uploads/2020/11/IMG_2459-300x300.jpg",
            price: 13,
        },
];

app.get('/hello-world', (req, res) => {
    res.send();
});

app.get('/api/products', (req, res) => {
    res.send(products);
});


// Start the server
const port = process.env.PORT | 3000;
app.listen(port, () => {
    console.log(`Server is listening on port http://localhost:${port}`);
});

