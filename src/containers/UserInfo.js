import React, { useState, useEffect } from 'react';

import UserForm from '../common/UserForm';
import UserDetails from '../common/UserDetails';

const UserInfo = ({ user, handleSetUser, deleteUser }) => {
    console.log(user);
    const [ newUser, setNewUser ] = useState({});
    const [ isEditing, setIsEditing ] = useState(false);

    const editUser = () => {
        setIsEditing(!isEditing);
    }

    useEffect(() => {}, [isEditing]);

    const backToList = () => {
        handleSetUser(null);
    }

    const onDeleteUser = () => {
        deleteUser(user.id);
    }

    const handleSubmit = () => {
        handleSetUser(newUser);
        setIsEditing(false);
    }

    const onChangeField = fields => {
        setNewUser(fields);
    }

    return (
        <div className="information-user-selected">
            {!isEditing && 
                <div className="user-details-not-editing"> 
                <div className="user-details-img">
                    <img alt="Vakoms"
                        src={user.img} />
                    <label>Name</label>
                    <p>{user.fullName}</p>
                </div>
                <div className="user-details-buttons">
                    <UserDetails user={user} />
                    <div className="buttons">
                        <button onClick={backToList}>Back</button>
                        <button onClick={editUser}>Update</button>
                        <button onClick={onDeleteUser}>Delete</button>
                    </div>
                </div>
            </div>
            }
            {isEditing && 
                <div className="user-form">
                <UserForm user={user} onChangeField={onChangeField} />
                <button onClick={handleSubmit}>Submit</button>
                </div>}
        </div>
    )
}

export default UserInfo;