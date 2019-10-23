import React, { useState } from 'react';

import {users}  from '../containers/users';
import {userRootStyle} from '../styles/userRootStyle';
import User from '../containers/User';
import UserInfo from '../containers/UserInfo';
import AdminFunc from '../containers/AdminFunc';

const Information = ({role} ) => {
    const  [ user, setUser ] = useState(null);
    const style = userRootStyle;

    const handleSetUser = (user) => {
        setUser(user);
    };

    const usersList = users.map( item => {
       return <User onSetUser={handleSetUser} key={item.id} user={item} />
    })
 
    return(
        <div className="information-root">
            <div style={style.userRoot} >
                {(role === 'user' && !user) && usersList}
            </div>
            <div style={style.userRoot}>
                {user && <UserInfo user={user} handleSetUser ={handleSetUser} />}
            </div>
            <div style={style.adminRoot}>
                {role === 'admin' && <AdminFunc />}
            </div>
        </div>
    )
}

export default Information;