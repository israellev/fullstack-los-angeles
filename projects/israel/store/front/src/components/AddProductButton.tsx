import { Box, Button } from "@mui/material";
import { useUser } from "../context/UserContext";
import { ProductUploadDialog } from "./ProductUploadDialog";
import { IUploadProduct, addProduct } from "../services/api-service";
import { useState } from "react";
import { useProducts } from "../context/ProductsContext";

export function AddProductButton() {
  const { isManager } = useUser();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const {addNewProdct} = useProducts()

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
        onUpload={addNewProdct}
      />
    </Box>
  );
}
