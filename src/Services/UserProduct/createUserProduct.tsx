import {UserProduct} from './../../Interfaces/User/UserProduct'
import {User} from './../../Interfaces/User/User'
import { Product } from '../../Interfaces/Product/Product'
import { Promotion } from '../../Interfaces/Promotion/Promotion'

const baseUrl = "http://localhost:8000/api"

export const getUsers = async (user:User, product:Product, createdAt:string, promotion:Promotion) : Promise<UserProduct> => {
    const response = await fetch(`${baseUrl}/user_has_products`,{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            user : user,
            product : product,
            createdAt: createdAt,
            promotion : promotion
        })
    })

    const json:UserProduct = await response.json()
    return json
}