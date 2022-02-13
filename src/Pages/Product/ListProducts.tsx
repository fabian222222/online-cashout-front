import React, { useState, useEffect } from 'react'
import { Product } from '../../Interfaces/Product/Product'
import { getProducts } from '../../Services/Product/getProducts'
import ProductSingle from '../../Components/Product/ProductSingle'

const ListProducts = () => {

    const [products, setProducts] = useState([])

    const getProductsAction = ( async () => {
        const getProductsApi = await getProducts()
        setProducts(getProductsApi)
        console.log(getProductsApi);
    })  

    useEffect(() => {
        getProductsAction()
    }, [])

    if (products.length > 0){
        return (
                <div>
                {products.map((product:Product) => {
                    return(
                        <ProductSingle key={product.id} id={product.id} name={product.name} price={product.price} file={product.filePath}></ProductSingle>
                        )
                    })}
            </div>
        )
    } else {
        return(
            <div>
                wait
            </div>
        )
    }
}

export default ListProducts