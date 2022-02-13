import {Product} from './../../Interfaces/Product/Product'

const baseUrl = "http://localhost:8000/api"

export const createProduct = async (product:Product) : Promise<Product> => {
    
    const response = await fetch(`${baseUrl}/products`,{
        method:'POST',
        headers:{
            "Content-Type":"multipart/form-data",
            "Authorization" : `Bearer ${localStorage.getItem('token')}`
        },
        body: ''
    })

    const json:Product = await response.json()
    return json
}