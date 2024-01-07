import { Box, Button } from "@mui/material";
import { useUser } from "../context/UserContext";
import { ProductUploadDialog } from "./ProductUploadDialog";
import { IProduct } from "../services/api-service";
import { useState } from "react";

export function AddProduct() {
  const { isManager } = useUser();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleUpload = (product: IProduct) => {
    console.log("Product uploaded:", product);
  };

  return (
    <Box>
      {isManager && (
        <Button variant="contained" onClick={() => setIsDialogOpen(true)}>
          Add Product
        </Button>
      )}
      <ProductUploadDialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onUpload={handleUpload}
      />
    </Box>
  );
}
