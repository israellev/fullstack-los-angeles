import { IProduct } from "../context/ProductsContext";



export async function getProducts(): Promise<IProduct[]> {
    try {
        const response = await fetch("http://localhost:3001/api/products")
        const products = await response.json()
        return products
    } catch(e) {
        console.error('Error fetching products:', e);
        throw e;
    }
}

export interface IUploadProduct {
    name: string,
    price: number
    image: File,
}

export async function addProduct(product: IUploadProduct): Promise<IProduct> {
    try {
        const formData = new FormData()
        formData.append("name", product.name)
        formData.append("price", product.price.toString())
        formData.append("image", product.image)
        const response = await fetch("http://localhost:3001/api/products", {
            method: "POST",
            body: formData,
        })
        const newProduct = await response.json()
        return newProduct
    } catch(e) {
        console.error('Error fetching products:', e);
        throw e;
    }
}

export async function deleteProduct(id: string): Promise<IProduct> {
    try {
        const response = await fetch(`http://localhost:3001/api/products/${id}`, {
            method: "DELETE",
        })
        const deletedProduct = await response.json()
        return deletedProduct
    } catch(e) {
        console.error('Error fetching products:', e);
        throw e;
    }
}
