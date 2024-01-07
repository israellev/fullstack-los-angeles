const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.static(path.join(__dirname, 'front', 'build')));

const products = [
    {
      name:"הומר סימפסון ההאקר",
      image_url:
           "https://www.hollo.co.il/media/merged_products/merge_front_8356_12773.png?v=1704039149", 
      price: 50,
  },  
  {
    name:"באטמן ההאקר",
    image_url:
        "https://www.hollo.co.il/media/merged_products/merge_front_8357_12881.png?v=1704039149", 
    price: 60,
  },  
  {
    name:"סופר מריו",
    image_url:
        "https://www.hollo.co.il/media/merged_products/merge_front_8364_12881.png?v=1704039149", 
    price: 20,
  },
  {
    name:"סופר מריו",
    image_url:
        "https://www.hollo.co.il/media/merged_products/merge_front_8364_12881.png?v=1704039149", 
    price: 20,
  },
  ];

app.get('/Hello-World!',(req, res) => {
    res.send();
});

app.get('/api/products',(req, res) => {
    res.send(products);
});


// start the server
const port = process.env.PORT | 3000;
app.listen(port, () => {
    console.log(`server is listening on port http://localhost:${port}`);
}); 


