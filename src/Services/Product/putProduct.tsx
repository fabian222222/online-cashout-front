import {Product} from './../../Interfaces/Product/Product'

const baseUrl = "http://localhost:8000/api"

export const getUsers = async (product:object, id:number) : Promise<Product> => {
    const response = await fetch(`${baseUrl}/products/${id}`,{
        method:'GET',
        headers:{
            "Content-Type":"application/json",
            "Authorization" : `Bearer ${localStorage.getItem('token')}`
        },
        body:JSON.stringify({
            product
        })
    })

    const json:Product = await response.json()
    return json
}