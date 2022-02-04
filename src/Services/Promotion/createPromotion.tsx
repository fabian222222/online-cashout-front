import {Promotion} from './../../Interfaces/Promotion/Promotion'

const baseUrl = "http://localhost:8000/api"

export const getUsers = async (promotion:Promotion) : Promise<Promotion> => {
    const response = await fetch(`${baseUrl}/promotion_codes`,{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            promotion
        })
    })

    const json:Promotion = await response.json()
    return json
}