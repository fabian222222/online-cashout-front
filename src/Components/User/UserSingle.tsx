import React from 'react';

const UserSingle = (props:any) => {
    
    return (
        <div>
            <p>{props.email}</p>
            <p>{props.username}</p>
        </div>
    );    
};

export default UserSingle;
