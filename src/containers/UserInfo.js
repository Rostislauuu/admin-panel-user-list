import React, { useState, useEffect } from 'react';

import UserForm from '../common/UserForm';
import UserDetails from '../common/UserDetails';

const UserInfo = ({ user, handleSetUser, deleteUser }) => {
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
            <div style={{flexBasis: '100%', maxWidth: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}> 
                <img alt="Vakoms"
                src="http://www.usupport.in.ua/uploads/company/picture/302/view_vakoms_logo_.png" />
                <UserDetails user={user} />
                <button onClick={backToList}>Back</button>
                <button onClick={editUser}>Update</button>
                <button onClick={onDeleteUser}>Delete</button>
            </div>}
            {isEditing && 
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <UserForm user={user} onChangeField={onChangeField} />
                <button onClick={handleSubmit}>Submit</button>
                </div>}
        </div>
    )
}

export default UserInfo;