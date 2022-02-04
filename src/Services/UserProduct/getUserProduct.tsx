import { UserProduct } from "../../Interfaces/User/UserProduct"

const baseUrl = "http://localhost:8000/api"

export const getUsers = async (id:number) : Promise<UserProduct> => {
    const response = await fetch(`${baseUrl}/user_has_products/${id}`,{
        method:'GET',
        headers:{
            "Content-Type":"application/json"
        }
    })

    const json:UserProduct = await response.json()
    return json
}