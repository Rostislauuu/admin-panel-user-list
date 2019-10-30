import React, { useState, useEffect } from 'react';

import UserForm from '../common/UserForm';
import UserDetails from '../common/UserDetails';

const UserInfo = ({ user, handleSetUser, handleDeleteUser }) => {
    const [ newUser, setNewUser ] = useState({});
    const [ isEditing, setIsEditing ] = useState(false);

    const handleSetEditing = () => {
        setIsEditing(!isEditing);
    }

    useEffect( () => {}, [isEditing] );

    const backToList = () => {
        handleSetUser(null);
    }

    const onDeleteUser = () => {
        handleDeleteUser(user.id);
    }

    const handleChangeField = fields => {
        setNewUser(fields);
    }

    const handleSubmit = () => {
        handleSetUser(newUser);
        setIsEditing(false);
    }

    return (
        <div className="information-user-selected">
            {!isEditing && 
                <div className="user-details-not-editing"> 
                    <div className="user-details-img">
                        <img alt="Vakoms" src={user.img} />
                        <label>
                            Name
                        </label>
                        <p>
                            {user.fullName}
                        </p>
                    </div>
                <div className="user-details-buttons">
                    <UserDetails user={user} />
                    <div className="buttons">
                        <button onClick={backToList}>
                            Back
                        </button>
                        <button onClick={handleSetEditing}>
                            Update
                        </button>
                        <button onClick={onDeleteUser}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
            }
            {isEditing && 
                <div className="user-form">
                <UserForm user={user} handleChangeField={handleChangeField} />
                    <button onClick={handleSubmit}>
                        Submit
                    </button>
                </div>}
        </div>
    )
}

export default UserInfo;