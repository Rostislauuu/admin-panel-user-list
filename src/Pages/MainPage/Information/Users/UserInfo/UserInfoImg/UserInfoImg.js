import React from 'react';

export const UserInfoImg = ({ selectedUser }) => {
    return(
        <div className="user-details-img">
            <div className="user-details-img-image">
                <img alt="Vakoms" src={selectedUser.img} />
            </div>

            <div className="user-details-img-info">
                <label>
                    Name
                </label>
                <p>
                    {selectedUser.fullName}
                </p>
            </div>

        </div>
    )
};