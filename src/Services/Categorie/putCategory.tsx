import { Category } from './../../Interfaces/Category/Category'

const baseUrl = "http://localhost:8000/api"

export const getUsers = async (categorie:object,id:number) : Promise<Category> => {
    const response = await fetch(`${baseUrl}/categories/${id}`,{
        method:'PUT',
        headers:{
            "Content-Type":"application/json",
            "Authorization" : `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
            categorie
        })
    })

    const json:Category = await response.json()
    return json
}