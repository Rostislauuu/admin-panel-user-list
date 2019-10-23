import React from 'react';
import  { userStyle } from '../styles/userStyle';

const User = ({ user, onSetUser }) => {
    const getUser = () => {
        onSetUser(user);
    };
    
    return (
        <div style={userStyle.root}>
            <div style={userStyle.photo}>
                <p>Imagine this is photo</p>
            </div>
            <div style={userStyle.name}>
                <p onClick={getUser} style={userStyle.hover}>{user.user}</p>
            </div>
        </div>
    )
}

export default User;