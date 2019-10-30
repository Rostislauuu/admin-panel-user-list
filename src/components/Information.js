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

        if (!user) {
            return;
        } else {
            const users = JSON.parse( localStorage.getItem('users') );
            const index = users.map( e => e.id ).indexOf(user.id);
            users[index] = user;

            setUsers(users);
            setSearchValue(searchValue);
        }

    };

    const handleAddUser = newUser => {
        setUsers( [...users, newUser] );
    }

    const correctAdminPass = '1111';
    const handleDeleteUser = id => {
        const adminPass = prompt('Enter admin`s password');

        if ( adminPass === correctAdminPass ) {
            setUsers( users.filter( user => {
                return user.id !== id
            } ));
            setUser(null);
        } else {
            alert('You have no permission');
        }
        
    }

    const handleSetSearchValue = value => {
        setSearchValue(value);
    }

    const usersList = users.map( item => {
       return <User handleSetUser={handleSetUser} key={item.id} user={item} />
    })

    const filteredList = usersList.filter( item => {
        return item.props.user.fullName.toLowerCase().includes( searchValue.toLowerCase() );
    }) 

    const userRole = 'user';
    const adminRole = 'admin';

    return(
        <div className="information-root">
            <div className="user-search-root">
                {( role === userRole && !user )  && 
                <Search handleSetSearchValue={handleSetSearchValue} searchValue={searchValue} />
                }
                <div className="information-user-root" >
                    {( role === userRole && !user ) && filteredList}
                </div>  
            </div>
            <div className="selected-user-root">
                {( user && role !== adminRole ) && 
                    <UserInfo handleDeleteUser={handleDeleteUser} handleAddUser={handleAddUser}
                 user={user} handleSetUser={handleSetUser} />}
            </div>
            <div className="information-admin-root">
                { role === adminRole && <Admin handleAddUser={handleAddUser} />}
            </div>
        </div>
    )
}

export default Information;