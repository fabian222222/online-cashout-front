import {User} from '../../Interfaces/User/User'

const baseUrl = "http://localhost:8000/api"

export const getUserEmail = async (email:string) : Promise<User[]> => {
    const response = await fetch(`${baseUrl}/users?email=${email}`,{
        method:'GET',
        headers:{
            "Content-Type":"application/json",
        }
    })

    const json:User[] = await response.json()
    return json
}