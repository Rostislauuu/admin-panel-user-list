import React from 'react';

const UserInfo = ({ user, handleSetUser }) => {

    const backToList = () => {
        handleSetUser(null);
    }

    return (
        <div className="information-user-selected">
            <p>{user.fullname}</p>
            <p>{user.birthday}</p>
            <p>{user.direction}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <button onClick={backToList}>Back</button>
        </div>
    )
}

export default UserInfo;