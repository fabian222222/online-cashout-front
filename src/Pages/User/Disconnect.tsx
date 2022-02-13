import React, {useEffect} from 'react'
import { Navigate } from 'react-router-dom'

const Disconnect = () => {

    useEffect(() => {
        localStorage.removeItem('token')
    }, [])
    

    return (
        <Navigate to="/connection" ></Navigate> 
    )
}

export default Disconnect