import {User} from './../../Interfaces/User/User'

const baseUrl = "http://localhost:8000/api"

export const getUser = async (id:number) : Promise<User> => {
    const response = await fetch(`${baseUrl}/users/${id}`,{
        method:'GET',
        headers:{
            "Content-Type":"application/json",
        }
    })

    const json:User = await response.json()
    return json
}