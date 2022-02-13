import {Product} from './../../Interfaces/Product/Product'

const baseUrl = "http://localhost:8000/api"

export const createProduct = async (product:Product) : Promise<Product> => {
    
    const formData = new FormData()

    formData.append("name", product.name)
    formData.append("file", product.file[0])
    formData.append("price", product.price)

    const response = await fetch(`${baseUrl}/products`,{
        method:'POST',
        headers:{
            "Authorization" : `Bearer ${localStorage.getItem('token')}`
        },
        body: formData
    })

    const json:Product = await response.json()
    return json
}