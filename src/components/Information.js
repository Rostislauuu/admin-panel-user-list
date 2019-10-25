import React, { useState, useEffect } from 'react';

import {allUsers}  from '../containers/users';
import User from '../containers/User';
import UserInfo from '../containers/UserInfo';
import Admin from '../containers/Admin';
import Search from '../containers/Search';

const Information = ({role}) => {
    const localData = localStorage.getItem('users');
    const actualData = localData? JSON.parse(localData) : allUsers;

    const  [ user, setUser ] = useState(null);
    const [ users, setUsers ] = useState(actualData);
    const [ searchValue, setSearchValue ] = useState('');

    useEffect( () => {
        localStorage.setItem( 'users', JSON.stringify(users) );
    }, [users] )

    const handleSetUser = (user) => {
        setUser(user);
        setSearchValue(searchValue);
    };

    const addUser = newUser => {
        setUsers( [...users, newUser] );
    }

    // NOT DELETING
    // const deleteUser = id => {
    //     const smth = JSON.parse( localStorage.getItem('users') );
        
    // }

    const handleSetSearchValue = value=> {
        setSearchValue(value);
    }

    const usersList = users.map( item => {
       return <User handleSetUser={handleSetUser} key={item.id} user={item} />
    })

    const filteredList = usersList.filter( item => {
        return item.props.user.fullName.toLowerCase().includes( searchValue.toLowerCase() );
    }) 

    return(
        <div className="information-root">
            <div className="user-search-root">
                {( role === 'user' && !user )  && 
                <Search handleSetSearchValue={handleSetSearchValue} searchValue={searchValue} />
                }
                <div className="information-user-root" >
                    {( role === 'user' && !user ) && filteredList}
                </div>  
            </div>
            <div className="selected-user-root">
                {(user && role !== 'admin' ) && <UserInfo user={user} handleSetUser={handleSetUser} />}
            </div>
            <div className="information-admin-root">
                {role === 'admin' && <Admin addUser={addUser} />}
            </div>
        </div>
    )
}

export default Information;