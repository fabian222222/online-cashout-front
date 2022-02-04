import {User} from './../../Interfaces/User/User'

const baseUrl = "http://localhost:8000/api"

export const getUsers = async (user:object, id : number) : Promise<User> => {
    const response = await fetch(`${baseUrl}/users`,{
        method:'PUT',
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
            user
        })
    })

    const json:User = await response.json()
    return json
}