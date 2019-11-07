import React, { useState, useEffect } from 'react';
import { UserForm } from '../Common/UserForm';
import './style/style.css';

export const Admin = () => {
    const [ fields ] = useState({
        fullName: '',
        birthday: '',
        direction: '',
        email: '',
        phone: '',
        img: ''
    });
    const [ newUser, setNewUser ] = useState({});

    const handleChangeField = fields => {
        setNewUser(fields);
    };

    useEffect( () => {
        handleChangeField(fields);
    }, [fields] );

    const sendData = () => {
        fetch('http://test-api-vakoms.herokuapp.com/users/', {
            method: 'POST',
            header: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser)
        })
    };

    const handleSubmit = () => {
        setNewUser(fields);
        const { fullName, birthday, direction, email, phone } = newUser;

        if( fullName && birthday && direction && email && phone ) {
            sendData();
        } else {
            alert('Fill all fields');
        }

    };

    return(
        <div className="information-admin">
            <div className="new-user-form">

                <UserForm
                    user={fields}
                    handleChangeField={handleChangeField}
                />
                <button onClick={handleSubmit}>
                    Submit
                </button>
                
            </div>
        </div>
    )
};