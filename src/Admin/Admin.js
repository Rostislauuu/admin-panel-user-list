import React, { useState, useEffect } from 'react';
import UserForm from '../common/UserForm';
import './style/style.css';

const Admin = ({handleAddUser}) => {
    const [ fields, setFields ] = useState({
        id: Date.now(),
        fullName: '',
        birthday: '',
        direction: '',
        email: '',
        phone: ''
    });
    const [ newUser, setNewUser ] = useState({});

    const handleChangeField = fields => {
        setNewUser(fields);
    }

    useEffect( () => {
        handleChangeField(fields);
    }, [fields] );

    const handleSubmit = () => {
        setNewUser(fields);
        const { fullName, birthday, direction, email, phone } = newUser;

        if( fullName && birthday && direction && email && phone ) {
            handleAddUser(newUser);
            alert('You added new user');
        } else {
            alert('Fill all fields');
        }
        
    }

    return(
        <div className="information-admin">
            <UserForm user={fields} handleChangeField={handleChangeField} />
            <button onClick={handleSubmit}>
                Submit
            </button>
        </div>
    )
}

export default Admin;