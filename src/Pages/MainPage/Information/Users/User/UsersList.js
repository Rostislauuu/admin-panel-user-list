import React, { useState, useEffect } from 'react';
import { UserCard } from  './UserCard';
import { Search } from '../../../../../Components/Search/Search';

const useFetch = url => {
    const [ users, setUsers ] = useState([ ]);

    useEffect( () => {
        const fetchData = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setUsers(data);
        }

        fetchData();
    }, [] );

    return users;
};

export const UsersList = () => {
    const emptyString = '';
    const fetchedData = useFetch("http://test-api-vakoms.herokuapp.com/users");
    const [ users, setUsers ] = useState( fetchedData || emptyString );
    
    useEffect ( () => {
        if ( fetchedData !== emptyString ){
            setUsers(fetchedData);
        }

    }, [fetchedData] );

    const usersList = users.map( item => {
        return <UserCard key={item.id}   user={item} />
    });

    const [ searchValue, setSearchValue ] = useState(emptyString);
    const handleSetSearchValue = value => {
        setSearchValue(value);
    };

    const filteredList = usersList.filter( item => {
        return item.props.user.fullName.toLowerCase().includes( searchValue.toLowerCase() );
    });

    return(
        <div className="information-user-root">
            <Search  searchValue={searchValue} handleSetSearchValue={handleSetSearchValue} />
            {filteredList}
        </div>
    )
};