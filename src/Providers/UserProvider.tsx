import React, {createContext, useState, useEffect} from 'react'
import { getMe } from '../Services/User/getMe'

export const UserContext = createContext()

export const  UserProvider = (props:any) => {

    const [user, setUser] = useState()

    const getMeAction = (async() => {
        const currentUser = await getMe()
        setUser(currentUser)
    })

    useEffect(() => {
        console.log(user);
    }, [user])

    useEffect(() => {
        getMeAction()
    }, [])
    
    
    return (
        <UserContext.Provider value={{user, setUser}}>
            {props.children}
        </UserContext.Provider>
    )
}