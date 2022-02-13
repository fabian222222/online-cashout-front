import { UserProduct } from "../../Interfaces/User/UserProduct"

const baseUrl = "http://localhost:8000/api"

export const getUserProducts = async (id:number) : Promise<Array<UserProduct>> => {
    const response = await fetch(`${baseUrl}/user_has_products?user=${id}&checked=0`,{
        method:'GET',
        headers:{
            "Content-Type":"application/json"
        }
    })

    const json:Array<UserProduct> = await response.json()
    return json
}