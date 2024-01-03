const express = require('express');
const app = express();
const port = 3001;
const path = require('path');
const { connectToDatabase } = require('./db');
const { MongoClient } = require('mongodb');







// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'front', 'build')));

const products = [
  {
      name: "מותגי על",
      price: 219,
      image_Url:"https://www.factory54.co.il/on/demandware.static/-/Sites-storefront-catalog/default/dw2a0f1b18/SHOP%20IN%20SHOP/MEN/Categories/041023-SHIRTS-POLO.jpg"
    },
    {
      name: "מותגי פרמיום",
      price: 250,
      image_Url: "https://www.factory54.co.il/on/demandware.static/-/Sites-storefront-catalog/default/dwa40b99e3/SHOP%20IN%20SHOP/MEN/Categories/041023-SHIRTS-LUXURY.jpg"
    },
    {
      name: "טי שירט",
      price: 300,
      image_Url: "https://www.factory54.co.il/on/demandware.static/-/Sites-storefront-catalog/default/dw7f6b4a6d/SHOP%20IN%20SHOP/MEN/Categories/041023-SHIRTS-TSHIRT.jpg"
    },
    {
      name: "מכופתרות",
      price: 219,
      image_Url: "https://www.factory54.co.il/on/demandware.static/-/Sites-storefront-catalog/default/dw232df13d/SHOP%20IN%20SHOP/MEN/Categories/041023-SHIRTS-BUTTOMS.jpg"
    },
    {
      name: "מותגי על",
      price: 219,
      image_Url: "https://www.factory54.co.il/on/demandware.static/-/Sites-storefront-catalog/default/dw2a0f1b18/SHOP%20IN%20SHOP/MEN/Categories/041023-SHIRTS-POLO.jpg"
    },
    {
      name: "מותגי פרמיום",
      price: 250,
      image_Url: "https://www.factory54.co.il/on/demandware.static/-/Sites-storefront-catalog/default/dwa40b99e3/SHOP%20IN%20SHOP/MEN/Categories/041023-SHIRTS-LUXURY.jpg"
    },
    {
      name: "טי שירט",
      price: 300,
      image_Url: "https://www.factory54.co.il/on/demandware.static/-/Sites-storefront-catalog/default/dw7f6b4a6d/SHOP%20IN%20SHOP/MEN/Categories/041023-SHIRTS-TSHIRT.jpg"
    },
    {
      name: "מכופתרות",
      price: 219,
      image_Url: "https://www.factory54.co.il/on/demandware.static/-/Sites-storefront-catalog/default/dw232df13d/SHOP%20IN%20SHOP/MEN/Categories/041023-SHIRTS-BUTTOMS.jpg"
    },
    {
      name: "מותגי על",
      price: 219,
      image_Url: "https://www.factory54.co.il/on/demandware.static/-/Sites-storefront-catalog/default/dwa40b99e3/SHOP%20IN%20SHOP/MEN/Categories/041023-SHIRTS-LUXURY.jpg"
    },
    {
      name: "מותגי פרמיום",
      price: 250,
      image_Url: "https://www.factory54.co.il/on/demandware.static/-/Sites-storefront-catalog/default/dwa40b99e3/SHOP%20IN%20SHOP/MEN/Categories/041023-SHIRTS-LUXURY.jpg"
    },
    {
      name: "טי שירט",
      price: 300,
      image_Url: "https://www.factory54.co.il/on/demandware.static/-/Sites-storefront-catalog/default/dw7f6b4a6d/SHOP%20IN%20SHOP/MEN/Categories/041023-SHIRTS-TSHIRT.jpg"
    },
    {
      name: "מכופתרות",
      price: 219,
      image_Url: "https://www.factory54.co.il/on/demandware.static/-/Sites-storefront-catalog/default/dw232df13d/SHOP%20IN%20SHOP/MEN/Categories/041023-SHIRTS-BUTTOMS.jpg"
    },
  ];
  

  
// // Connect to the database
// connectToDatabase();

// // Define your API endpoint
// app.get('/api/products', async (req, res) => {
//   const database = getDatabase();
//   const productsCollection = database.collection('products');

//   try {
//     // Fetch data from the 'products' collection
//     const products = await productsCollection.find({}).toArray();

//     // Send the products as a JSON response
//     res.json(products);
//   } catch (error) {
//     console.error('Error fetching products:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });


// Define a route
app.get('/hello-world', (req, res) => {
  res.send("hey daniel");
});

// get the products list 
app.get('/api/products/', (req, res) => {
    res.send(products);
  });


// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});


