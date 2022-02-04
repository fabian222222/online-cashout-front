import { ProductCategory } from './../../Interfaces/Product/ProductCategory'

const baseUrl = "http://localhost:8000/api"

export const getUsers = async (product:string,category:string, id:number) : Promise<ProductCategory> => {
    const response = await fetch(`${baseUrl}/product_has_categories/${id}`,{
        method:'PUT',
        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({
            product,
            category
        })
    })

    const json:ProductCategory = await response.json()
    return json
}