import React, { useState, useEffect } from 'react';

export const UserForm = ({ user, handleChangeField }) => {    
    const [ fields, setFields ] = useState(user);

    const handleFieldChange = name => event => {
        const value = event.target.value;
        setFields( { ...fields, [name]: value } );
    };

    useEffect( () => {
        handleChangeField(fields);
    }, [fields] );

    return(
        <div className="user-form">

            <label>
                Name
            </label>
            <input onChange={handleFieldChange('fullName')} name="fullName"
                value={fields.fullName} type="text" 
            />

            <label>
                Birthday
            </label>
            <input onChange={handleFieldChange('birthday')} name="birthday"
                value={fields.birthday} type="text" 
            />

            <label>
                Direction
            </label>
            <input onChange={handleFieldChange('direction')} name="direction"
                value={fields.direction} type="text" 
            />

            <label>
                Email
            </label>
            <input onChange={handleFieldChange('email')} name="email"
                value={fields.email}  type="text" 
            />

            <label>
                Phone
            </label>
            <input onChange={handleFieldChange('phone')} name="phone"
                value={fields.phone} type="text" 
            />

        </div>
    )
};