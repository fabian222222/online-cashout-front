import {Promotion} from './../../Interfaces/Promotion/Promotion'

const baseUrl = "http://localhost:8000/api"

export const createPromotion = async (promotion:Promotion) : Promise<Promotion> => {
    console.log(promotion);
    const response = await fetch(`${baseUrl}/promotion_codes`,{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            amount : promotion.amount,
            pourcent : promotion.pourcent === true ? promotion.pourcent : false,
            fixed : promotion.fixed === true ? promotion.fixed : false,
            description : promotion.description ? promotion.description : "",
            serial : promotion.serial
        })
    })

    const json:Promotion = await response.json()
    return json
}