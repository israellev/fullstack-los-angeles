import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { IProduct } from "../services/api-service";

interface Props {
  open: boolean;
  onClose: () => void;
  onUpload: (product: IProduct) => void;
}

export function ProductUploadDialog(props: Props) {
  const { open, onClose, onUpload } = props;
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState<File>();

  const handleUpload = () => {
    if (productName && productPrice && productImage) {
      onUpload({
        name: productName,
        price: parseFloat(productPrice),
        image_url: "productImage",
      });
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Upload New Product</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Fill in the details for the new product.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Product Name"
          fullWidth
          variant="outlined"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Product Price"
          fullWidth
          variant="outlined"
          type="number"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          id="product-image"
          onChange={(e) => {
            const file = e.target?.files?.[0];
            setProductImage(file);
          }}
        />
        <label htmlFor="product-image">
          <Button
            variant="contained"
            color="primary"
            component="span"
            style={{ marginTop: "10px" }}
          >
            Upload Product Image
          </Button>
        </label>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleUpload} color="primary">
          Upload
        </Button>
      </DialogActions>
    </Dialog>
  );
}
