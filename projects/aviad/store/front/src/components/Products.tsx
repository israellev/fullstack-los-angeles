import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

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

export function Products() {
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
