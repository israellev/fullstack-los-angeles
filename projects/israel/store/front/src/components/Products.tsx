import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useProducts } from "../context/ProductsContext";
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export function Products() {

  const {products, deleteExistProduct} = useProducts()

  return (  
    <Grid container spacing={2} style={{ padding: "20px" }}>
      {products.map((product, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card style={{ maxWidth: "345px", flex: 1, position: "relative" }}>
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

                {/* Delete icon */}
            <IconButton
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                backgroundColor: "white", // Add a background color for better visibility
              }}
              onClick={() => deleteExistProduct(product._id)}
            >
              <DeleteIcon />
            </IconButton>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
