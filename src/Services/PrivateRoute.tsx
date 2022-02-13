import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = (props:any) => {
    if (localStorage.getItem("token")) {
        return props.children
    } else {
        return <Navigate to="/connection"></Navigate>
    }
}

export default PrivateRoute