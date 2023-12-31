import Card from "@mui/material/Card";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { Iproducts, getproducts } from "../services/api-service";

  export function Products() {
    
    const [products, setProducts] = useState<Iproducts[]>([])
  
    useEffect(() => {
      getproducts().then((products) => {
        setProducts(products);
      });
    }, []);
  
    return (
      <Grid container spacing={2} style={{ padding: '20px', background: '#FFA500' }}>
      {products.map((product, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card style={{ maxWidth: "345px", flex: 1 }}>
            <div>
              <CardMedia
                component="img"
                height="auto"
                image={product.image_Url}
                alt={product.name}
                
              />
            </div>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                textAlign="center"
              >
                {product.name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="center"
              >
                {product.price}₪
              </Typography>
              <div>
 
      <IconButton aria-label="delete" disabled color="primary">
        <DeleteIcon />
      </IconButton>
      <IconButton style={{ color: 'orange' }} aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
    </div>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
      );
}