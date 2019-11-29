import React from 'react';
import { UserFormValidation } from '../../../../Components/UserForm/UserForm';
import './style/style.css';

export const Admin = ({ location }) => {
    const { pathname } = location;
    const selectedUser = {
        fullName: '',
        birthday: '',
        direction: '',
        subdirection: '',
        email: '',
        phone: ''
    };
    
    return(
        <div className="information-admin">
            <div className="new-user-form">
                <UserFormValidation pathname={pathname} selectedUser={selectedUser} />
            </div>
        </div>
    )
};