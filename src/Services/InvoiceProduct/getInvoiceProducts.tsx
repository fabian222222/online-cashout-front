import {InvoiceProduct} from './../../Interfaces/Invoice/InvoiceProduct'

const baseUrl = "http://localhost:8000/api"

export const getUsers = async () : Promise<Array<InvoiceProduct>> => {
    const response = await fetch(`${baseUrl}/invoice_products`,{
        method:'GET',
        headers:{
            "Content-Type":"application/json",
            "Authorization" : `Bearer ${localStorage.getItem('token')}`
        }
    })

    const json:Array<InvoiceProduct> = await response.json()
    return json
}