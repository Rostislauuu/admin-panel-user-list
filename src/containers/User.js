import React from 'react';

const User = ({ user, handleSetUser }) => {
    const getUser = () => {
        handleSetUser(user);
    };
    
    return (
        <div className="col-1-4">
            <div className="user">
                <div className="user-photo">
                    <img alt="Vakoms"
                        src="http://www.usupport.in.ua/uploads/company/picture/302/view_vakoms_logo_.png" />
                </div>
                <div className="user-name">
                    <p onClick={getUser}>{user.fullName}</p>
                </div>
            </div>
        </div>
    )
}

export default User;