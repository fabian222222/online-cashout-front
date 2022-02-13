import { Category } from './../../Interfaces/Category/Category'

const baseUrl = "http://localhost:8000/api"

export const getCategories = async () : Promise<Array<Category>> => {
    const response = await fetch(`${baseUrl}/categories`,{
        method:'GET',
        headers:{
            "Content-Type":"application/json",
            "Authorization" : `Bearer ${localStorage.getItem('token')}`
        }
    })

    const json:Array<Category> = await response.json()
    return json
}