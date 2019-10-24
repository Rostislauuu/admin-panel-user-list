import React from 'react';

import { userStyle } from '../styles/userStyle';

const UserInfo = ({ user, handleSetUser }) => {
    const style = userStyle;

    const backToList = () => {
        handleSetUser(null);
    }

    return (
        <div style={style.selectedUser}>
            <p>{user.user}</p>
            <p>{user.direction}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <button style={style.hover} onClick={backToList}>Back</button>
        </div>
    )
}

export default UserInfo;