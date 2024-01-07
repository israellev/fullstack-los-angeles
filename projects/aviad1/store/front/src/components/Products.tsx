import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { IPoduct, getProducts } from "../services/api-service";

export function Products() {

const [products, setProducts] = useState<IPoduct[]>([])

useEffect(() => {
getProducts().then(products => {
  setProducts(products)
})
},[])

  return (  
    <Grid container spacing={2} style={{ padding: "20px" }}>
      {products.map((product, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card style={{ maxWidth: "345px", flex: 1 }}>
            <div>
              <CardMedia
                component="img"
                height="140"
                image={product.image_url}
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
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
