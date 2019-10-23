import React from 'react';

import { userStyle } from '../styles/userStyle';

const UserInfo = ({ user, handleSetUser }) => {
    console.log(user);

    const styleUser = userStyle;

    const backToList = () => {
        handleSetUser(null);
    }

    return (
        <div style={styleUser.selectedUser}>
            <p>{user.user}</p>
            <p>{user.direction}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <button onClick={backToList}>Back</button>
        </div>
    )
}

export default UserInfo;