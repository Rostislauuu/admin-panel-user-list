import React from 'react';

const UserInfoImg = ({ selectedUser }) => {
    return(
        <div className="user-details-img">
            <img alt="Vakoms" src={selectedUser.img} />
            <label>
                Name
            </label>
            <p>
                {selectedUser.fullName}
            </p>
        </div>
    )
}

export default UserInfoImg;