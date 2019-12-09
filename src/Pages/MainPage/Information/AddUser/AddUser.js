import React from 'react';
import { UserFormValidation } from '../../../../Components/UserForm/UserForm';
import './style/style.css';
import { useDispatch } from "react-redux";

export const AddUser = ({ location }) => {
    const dispatch = useDispatch();
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
                <UserFormValidation pathname={pathname} selectedUser={selectedUser} dispatch={dispatch} />
            </div>
        </div>
    )
};