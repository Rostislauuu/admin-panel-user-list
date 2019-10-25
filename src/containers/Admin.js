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
        addUser(user);
        console.log(user);
    }

    return(
        <div className="information-admin">
            <input onChange={ (e) => setFullName(e.target.value)} type="text" placeholder="fullname" />
            <input onChange={(e) => setBirthday(e.target.value)} type="text" placeholder="birthday"  />
            <input onChange={(e) => setDirection(e.target.value)} type="text" placeholder="direction"  />
            <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="email" />
            <input onChange={(e) => setPhone(e.target.value)} type="text" placeholder="phone" />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Admin;