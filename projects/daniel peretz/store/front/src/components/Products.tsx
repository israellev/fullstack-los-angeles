import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Header } from "./Header";

const products = [
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

export function Products(){
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
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
      );
}