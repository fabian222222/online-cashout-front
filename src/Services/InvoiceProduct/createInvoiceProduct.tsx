import {InvoiceProduct} from './../../Interfaces/Invoice/InvoiceProduct'

const baseUrl = "http://localhost:8000/api"

export const getUsers = async (invoiceProduct:InvoiceProduct) : Promise<InvoiceProduct> => {
    const response = await fetch(`${baseUrl}/invoice_products`,{
        method:'POST',
        headers:{
            "Content-Type":"application/json",
            "Authorization" : `Bearer ${localStorage.getItem('token')}`
        },
        body:JSON.stringify({
            invoiceProduct
        })
    })

    const json:InvoiceProduct = await response.json()
    return json
}