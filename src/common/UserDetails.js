import React from 'react';

const UserDetails = ({user}) => {
    return(
        <div className="user-details">
            <label>Name</label>
            <p>{user.fullName}</p>
            <label>Birthday</label>
            <p>{user.birthday}</p>
            <label>Direction</label>
            <p>{user.direction}</p>
            <label>Email</label>
            <p>{user.email}</p>
            <label>Phone</label>
            <p>{user.phone}</p>
        </div>
    )
}

export default UserDetails;