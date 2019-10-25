import React, { useState } from 'react';

const Admin = ({addUser}) => {
    const [ fullName, setFullName] = useState('');
    const [ birthday, setBirthday ] = useState('');
    const [ direction, setDirection ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');

    const user = {
        id: Date.now().toString(),
        fullName,
        birthday,
        direction,
        email,
        phone
    }

    const handleSubmit = () => {
        if( fullName && birthday && direction && email && phone) {
            addUser(user);
            setFullName('');
            setBirthday('');
            setDirection('');
            setEmail('');
            setPhone('');
        } else {
            alert('Fill all fields');
        }
    }

    return(
        <div className="information-admin">
            <label>Name</label>
            <input onChange={ (e) => setFullName(e.target.value)} value={fullName} type="text" />
            <label>Birthday</label>
            <input onChange={(e) => setBirthday(e.target.value)} value={birthday} type="text" />
            <label>Direction</label>
            <input onChange={(e) => setDirection(e.target.value)} value={direction} type="text" />
            <label>Email</label>
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" />
            <label>Phone</label>
            <input onChange={(e) => setPhone(e.target.value)} value={phone} type="text" />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Admin;