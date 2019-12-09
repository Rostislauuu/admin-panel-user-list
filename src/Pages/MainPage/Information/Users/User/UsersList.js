import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { UserCard } from  './UserCard';
import { Search } from '../../../../../Components/Search/Search';

export const UsersList = () => {
    const users = useSelector( state => state.users );
    const emptyString = '';
    const [ searchValue, setSearchValue ] = useState(emptyString);

    const usersList = users.map( ( item, index ) => {
        return <UserCard key={index} user={item} />
    });

    const handleSetSearchValue = value => {
        setSearchValue(value);
    };

    const filteredList = usersList.filter( item => {
        return item.props.user.fullName.toLowerCase().includes( searchValue.toLowerCase() );
    });

    return(
        <div className="information-user-root">
            <Search  searchValue={searchValue} handleSetSearchValue={handleSetSearchValue} />
            { filteredList }
        </div>
    )
};