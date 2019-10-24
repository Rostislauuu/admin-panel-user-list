import React from 'react';

import {search} from '../styles/search';

const Search = ({ handleSetSearchValue }) => {
    const style = search;

    return(
        <div style={style.searchRoot} >
            <input onChange={ e => handleSetSearchValue(e.target.value)} 
            style={style.searchField} type="text" placeholder="Search..." />
        </div>
    )
}

export default Search;