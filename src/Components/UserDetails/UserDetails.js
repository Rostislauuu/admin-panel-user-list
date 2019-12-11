import React from 'react';

export const UserDetails = ({ user }) => {
    return(
        <div className="user-details">
            
            <label>
                Birthday
            </label>
            <p>
                {user.birthday}
            </p>

            <label>
                Direction
            </label>
            <p>
                {user.direction}
            </p>

            <label>
                Subdirection
            </label>
            <p>
                {user.subdirection}
            </p>

            <label>
                Email
            </label>
            <p>
                {user.email}
            </p>

            <label>
                Phone
            </label>
            <p>
                {user.phone}
            </p>

        </div>
    )
};