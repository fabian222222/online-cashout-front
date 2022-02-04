import { ProductCategory } from './../../Interfaces/Product/ProductCategory'

const baseUrl = "http://localhost:8000/api"

export const getUsers = async (id:number) : Promise<ProductCategory> => {
    const response = await fetch(`${baseUrl}/product_has_categories/${id}`,{
        method:'DELETE',
        headers:{
            "Content-Type":"application/json"
        }
    })

    const json:ProductCategory = await response.json()
    return json
}