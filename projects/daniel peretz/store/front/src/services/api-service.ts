
export interface Iproducts {
    name: string,
    image_Url: string,
    price: number
}

export async function getproducts(): Promise<Iproducts[]> {
    try {
        const response = await fetch("http://localhost:3001/api/products")
        const products = await response.json()
        return products
    } catch (e) {

        console.error('Error fetching products:', e);
        throw e;
    }
}
