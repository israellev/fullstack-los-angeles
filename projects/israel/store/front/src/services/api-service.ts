
export interface IProduct {
    name: string,
    image_url: string,
    price: number
}

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
