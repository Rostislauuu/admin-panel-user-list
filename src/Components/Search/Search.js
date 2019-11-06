import React from 'react';

export const Search = ({ handleSetSearchValue, searchValue }) => {
    return(
        <div className="search" >
            <input 
                onChange={ e => handleSetSearchValue(e.target.value)}
                value={searchValue} type="text" placeholder="Search..." 
            />
        </div>
    )
};