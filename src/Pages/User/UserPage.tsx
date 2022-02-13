import React, {useContext} from 'react';
import UserSingle from '../../Components/User/UserSingle';
import { UserContext } from '../../Providers/UserProvider';

const UserPage = () => {

    const {user} = useContext(UserContext)

    if (user) {
        return (
            <div>
                <UserSingle key={user.id} email={user.email} username={user.username}></UserSingle>
            </div>
        );
    } else {
        return (
            <div>
                wait
            </div>
        )
    }
};

export default UserPage;
