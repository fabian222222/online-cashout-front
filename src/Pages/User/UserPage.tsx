import React, {useState, useEffect} from 'react';
import UserSingle from '../../Components/User/UserSingle';
import { User } from '../../Interfaces/User/User';
import { getUser } from '../../Services/User/getUser'

const UserPage = () => {

    const [user, setUser] = useState([])

    const userAction = (async ()=> {
        const getUserApi = await getUser(5)
        console.log(getUserApi);
        setUser(getUserApi as User)
    })

    useEffect(() => {
        userAction()
    }, []);

    useEffect(() => {
        console.log(user);
    }, [user])

    return (
        <div>
            <UserSingle key={user.id} email={user.email} username={user.username}></UserSingle>
        </div>
    );
};

export default UserPage;
