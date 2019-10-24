import React, { useState } from 'react';

import {users}  from '../containers/users';
import User from '../containers/User';
import UserInfo from '../containers/UserInfo';
import Admin from '../containers/Admin';
import Search from '../containers/Search';

const Information = ({role} ) => {
    const  [ user, setUser ] = useState(null);
    const [ searchValue, setSearchValue ] = useState('');

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
        return item.props.user.fullName.toLowerCase().includes( searchValue.toLowerCase() );
    }) 
    // SEARCH FIELD IS EMPTY AFTER 'BACK' FROM SELECTED USER!!!!!!!!!
    return(
        <div>
            <div className="user-search">
                {( role === 'user' && !user )  && <Search handleSetSearchValue={handleSetSearchValue} />}
                <div className="information-user-root" >
                    {( role === 'user' && !user ) && filteredList}
                </div>  
            </div>
            <div className="information-user-selected">
                {user && <UserInfo user={user} handleSetUser ={handleSetUser} />}
            </div>
            <div className="information-admin-root">
                {role === 'admin' && <Admin />}
            </div>
        </div>
    )
}

export default Information;