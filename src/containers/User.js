import React, { useState, useEffect } from 'react';
import  { userStyle } from '../styles/userStyle';

const User = ({ user, onSetUser }) => {
    const styleUser = userStyle;

    const getUser = () => {
        onSetUser(user);
    };
    
        return (
            <div style={styleUser.root}>
                <div style={styleUser.photo}>
                    <p>Imagine this is photo</p>
                </div>
                <div style={styleUser.name}>
                    <p onClick={getUser}>{user.user}</p>
                </div>
            </div>
        )
}

export default User;