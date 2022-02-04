import {User} from './../../Interfaces/User/User'

const baseUrl = "http://localhost:8000/api"

export const getUsers = async (user:User) : Promise<User> => {
    const response = await fetch(`${baseUrl}/users`,{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            email : user.email,
            roles : user.roles,
            password : user.password,
            userHasProducts : user.product ? user.product : [],
            username : user.username
        })
    })

    const json:User = await response.json()
    return json
}