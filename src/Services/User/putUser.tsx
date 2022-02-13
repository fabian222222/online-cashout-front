import {User} from './../../Interfaces/User/User'

const baseUrl = "http://localhost:8000/api"

export const putUser = async (user:User, id:number) : Promise<User> => {
    const response = await fetch(`${baseUrl}/users/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(user)
    })

    const json:User = await response.json()
    return json
}