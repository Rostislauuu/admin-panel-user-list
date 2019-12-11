import React from 'react';
import TextField from '@material-ui/core/TextField';

export const Search = ({ handleSetSearchValue, searchValue }) => {
    return (
        <div className="search" >
            <TextField
                label="Search" value={searchValue} type="text"
                onChange={ e => handleSetSearchValue(e.target.value)}
            />
        </div>
    )
};