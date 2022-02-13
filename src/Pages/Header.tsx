import React, {useEffect, useState} from 'react';
import { getUsers } from '../Services/User/getUsers';
import {User} from './../Interfaces/User/User'

const Header = () => {

    const [users, setUsers] = useState([])

    const getUser = async () => {
        const users2 = await getUsers();
        setUsers(users2 as User[])
    }

    useEffect(() => {
        getUser()
    }, []);

    useEffect(() => {
        // console.log(users);
    }, [users]);

    return (
        <div>
            {/* bonjour */}
        </div>
    );
};

export default Header;
