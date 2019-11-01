import React from 'react';

const Search = ({ handleSetSearchValue, searchValue }) => {
    return(
        <div className="search" >
            <input 
                onChange={ e => handleSetSearchValue(e.target.value)}
                value={searchValue} type="text" placeholder="Search..." 
            />
        </div>
    )
}

export default Search;