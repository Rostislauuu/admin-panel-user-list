import React from 'react';

export const UserInfoImg = ({ selectedUser }) => {
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
};