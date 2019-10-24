import React, { useState } from 'react';

import {users}  from '../containers/users';
import {userRootStyle} from '../styles/userRootStyle';
import User from '../containers/User';
import UserInfo from '../containers/UserInfo';
import Admin from '../containers/Admin';
import Search from '../containers/Search';

const Information = ({role} ) => {
    const  [ user, setUser ] = useState(null);
    const [ searchValue, setSearchValue ] = useState('');
    const style = userRootStyle;

    const handleSetUser = (user) => {
        setUser(user);
    };

    const handleSetSearchValue = value=> {
        setSearchValue(value);
    }

    const usersList = users.map( item => {
       return <User handleSetUser={handleSetUser} key={item.id} user={item} />
    })

    const filteredList = usersList.filter( item => {
        return item.props.user.fullname.toLowerCase().includes( searchValue.toLowerCase() );
    }) 
 
    return(
        <div className="information-root">
            <div>
                {role === 'user' && <Search handleSetSearchValue={handleSetSearchValue} />}
                <div style={style.userRoot} >
                    {(role === 'user' && !user) && filteredList}
                </div>  
            </div>
            <div style={style.userRoot}>
                {user && <UserInfo user={user} handleSetUser ={handleSetUser} />}
            </div>
            <div style={style.adminRoot}>
                {role === 'admin' && <Admin />}
            </div>
        </div>
    )
}

export default Information;