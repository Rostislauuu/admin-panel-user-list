import React from 'react';

const User = ({user}) => {
    return(
        <div className="user">
            <div className="user-photo">
                <p>Imagine this is photo</p>
            </div>
            <div className="user-name">
                <p>{user}</p>
            </div>
        </div>
    )
}

export default User;