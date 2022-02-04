import {Promotion} from './../../Interfaces/Promotion/Promotion'

const baseUrl = "http://localhost:8000/api"

export const getUsers = async (id:number) : Promise<Promotion> => {
    const response = await fetch(`${baseUrl}/promotion_codes/${id}`,{
        method:'GET',
        headers:{
            "Content-Type":"application/json"
        }
    })

    const json:Promotion = await response.json()
    return json
}