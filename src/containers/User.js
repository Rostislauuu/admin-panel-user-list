import React from 'react';

const User = ({ user, handleSetUser }) => {
    const getUser = () => {
        handleSetUser(user);
    };
    
    return (
        <div className="col-1-6 col-1-4 col-1-3 col-1-2" onClick={getUser}>
            <div className="user">
                <div className="user-photo">
                    <img alt="Vakoms"
                        src={user.img} />
                </div>
                <div className="user-name">
                    <p>{user.fullName}</p>
                </div>
            </div>
        </div>
    )
}

export default User;