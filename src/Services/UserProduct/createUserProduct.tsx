import {UserProduct} from './../../Interfaces/User/UserProduct'

const baseUrl = "http://localhost:8000/api"

export const createUserProduct = async (user:string, product:number,is_checked:boolean=false, promotion:string,createdAt:string) : Promise<UserProduct> => {
    const response = await fetch(`${baseUrl}/user_has_products`,{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            checked :is_checked,
            user:`/api/users/${user}`,
            product:`/api/products/${product}`,
            promotion: promotion ? `/api/promotions/${promotion}` : null,
            createdAt:createdAt
        })
    })

    const json:UserProduct = await response.json()
    return json
}