import {Product} from './../../Interfaces/Product/Product'

const baseUrl = "http://localhost:8000/api"

export const getUsers = async () : Promise<Array<Product>> => {
    const response = await fetch(`${baseUrl}/products`,{
        method:'POST',
        headers:{
            "Content-Type":"application/json",
            "Authorization" : `Bearer ${localStorage.getItem('token')}`
        }
    })

    const json:Array<Product> = await response.json()
    return json
}