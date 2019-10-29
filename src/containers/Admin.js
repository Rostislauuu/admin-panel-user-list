import React, { useState, useEffect } from 'react';
import UserForm from '../common/UserForm';

const Admin = ({addUser}) => {
    const [fields, setFields] = useState({
        id: Date.now(),
        fullName: '',
        birthday: '',
        direction: '',
        email: '',
        phone: ''
    });
    const [ newUser, setNewUser ] = useState({});

    const onChangeField = fields => {
        setNewUser(fields);
    }

    useEffect(() => {
        onChangeField(fields);
    }, [fields]);

    const handleSubmit = () => {
        setNewUser(fields);
        const { fullName, birthday, direction, email, phone } = newUser;
        if( fullName && birthday && direction && email && phone ) {
            addUser(newUser);
            setFields(null);
            alert('New user successfully added');
        } else {
            alert('Fill all fields');
        }
    }

    return(
        <div className="information-admin">
            <UserForm user={fields} onChangeField={onChangeField} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Admin;