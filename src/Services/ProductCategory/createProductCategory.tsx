import { Product } from '../../Interfaces/Product/Product'
import { User } from '../../Interfaces/User/User'
import { ProductCategory } from './../../Interfaces/Product/ProductCategory'

const baseUrl = "http://localhost:8000/api"

export const createProductCategory = async (categoryId:string, productId: number) : Promise<ProductCategory> => {
    const response = await fetch(`${baseUrl}/product_has_categories`,{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            Product : `api/products/${productId}`,
            Categorie : `api/categories/${categoryId}`
        })
    })

    const json:ProductCategory = await response.json()
    return json
}