import {Product} from './../../Interfaces/Product/Product'

const baseUrl = "http://127.0.0.1:8000/api"

export const getProducts = async () : Promise<Array<Product>> => {
    const response = await fetch(`${baseUrl}/products`,{
        method:'GET',
        headers:{
            "Content-Type":"application/json",
            "Authorization" : `Bearer ${localStorage.getItem('token')}`
        }
    })

    const json:Array<Product> = await response.json()
    return json
}