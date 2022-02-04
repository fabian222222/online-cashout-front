import { ProductCategory } from './../../Interfaces/Product/ProductCategory'

const baseUrl = "http://localhost:8000/api"

export const getUsers = async () : Promise<Array<ProductCategory>> => {
    const response = await fetch(`${baseUrl}/product_has_categories`,{
        method:'GET',
        headers:{
            "Content-Type":"application/json"
        }
    })

    const json:Array<ProductCategory> = await response.json()
    return json
}