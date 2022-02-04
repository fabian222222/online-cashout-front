import {User} from './../../Interfaces/User/User'

const baseUrl = "http://localhost:8000/api"

export const getUsers = async (id:number) : Promise<User> => {
    const response = await fetch(`${baseUrl}/users/${id}`,{
        method:'DELETE',
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${localStorage.getItem("token")}`
        }
    })

    const json:User = await response.json()
    return json
}