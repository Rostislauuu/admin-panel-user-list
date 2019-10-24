import React from 'react';

const Search = ({ handleSetSearchValue }) => {
    return(
        <div className="search" >
            <input onChange={ e => handleSetSearchValue(e.target.value)} type="text" placeholder="Search..." />
        </div>
    )
}

export default Search;