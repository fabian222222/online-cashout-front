import {InvoiceProduct} from './../../Interfaces/Invoice/InvoiceProduct'

const baseUrl = "http://localhost:8000/api"

export const getUsers = async (id:number) : Promise<InvoiceProduct> => {
    const response = await fetch(`${baseUrl}/invoice_products/${id}`,{
        method:'GET',
        headers:{
            "Content-Type":"application/json",
            "Authorization" : `Bearer ${localStorage.getItem('token')}`
        }
    })

    const json:InvoiceProduct = await response.json()
    return json
}