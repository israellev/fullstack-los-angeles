import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { IUploadProduct, addProduct, deleteProduct, getProducts } from "../services/api-service";

export interface IProduct {
    _id: string,
    name: string,
    price: number
    image_url: string,
}

interface IProductContext {
    products?: IProduct[];
    addNewProdct?: (product: IUploadProduct) => void;
    deleteExistProduct?: (id: string) => void;
}

const ProdctContext = createContext<IProductContext>({})

export function ProductProvider (props: {children: ReactNode}) {
    
    const [products, setProducts] = useState<IProduct[]>([])
  
    useEffect(() => {
      getProducts().then(products => {
        setProducts(products)
      })
    }, []) 

    async function addNewProdct(product: IUploadProduct) {
        const newProudct = await addProduct(product)
        setProducts([...products, newProudct])
    };
    
    async function deleteExistProduct(id: string) {
        const deletedProudct = await deleteProduct(id)
        setProducts(products.filter(p => p._id !== deletedProudct._id))
    };
    
    const value = {
        products,
        addNewProdct,
        deleteExistProduct,
    }
    return <ProdctContext.Provider value={value}>
        {props.children}
    </ProdctContext.Provider>
}

export function useProducts() {
    return useContext(ProdctContext) as Required<IProductContext>;
}
