import React from 'react';
import { deleteUser } from '../../Services/User/deleteUser';

const UserSingle = (props:any) => {
    
    const deleteUserAction=(async() => {
        const deleteIt = await deleteUser(props.id)
    })

    return (
        <div>
            <p>{props.email}</p>
            <p>{props.username}</p>
            <button onClick={
                (() => {
                    deleteUserAction()
                })
            }>delete</button>
        </div>
    );    
};

export default UserSingle;
