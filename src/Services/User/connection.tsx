import { Connected } from "../../Interfaces/User/Connected"

const baseUrl = "http://localhost:8000/"

export const connection = async (email:string, password:string) => {
    const response = await fetch(`${baseUrl}authentication_token`,{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            email : email,
            password : password,
        })
    })

    const json:Connected = await response.json()
    return json
}