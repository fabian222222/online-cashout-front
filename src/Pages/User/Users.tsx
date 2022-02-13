import React, {useState, useEffect} from 'react';
import { getUsers } from '../../Services/User/getUsers';
import UserSingle from '../../Components/User/UserSingle';
import { User } from '../../Interfaces/User/User';

const Users = () => {

    const [users, setUsers] = useState([])

    const usersAction = (async() => {
        const usersAction = await getUsers();
        setUsers(usersAction as User[])
    })  

    useEffect(() => {
        usersAction()
    }, []);

    return (
        <div>
            {users.map((user:User)=>{
                return(
                    <UserSingle key={user.id} email={user.email} username={user.username}></UserSingle>
                )
            })}
        </div>
    );
};

export default Users;
