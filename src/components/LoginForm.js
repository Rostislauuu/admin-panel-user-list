import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const LoginForm = () => {
    const [ fields, setFields ] = useState({});

    const handleChangeFields = name => event => {
        const value = event.target.value;
        setFields( { ...fields, [name]: value } );
    }

    const user = 'user';
    const admin = 'admin';
    const unknown = 'unknown';
    const initialRole = '';
    const [ role, setRole ] = useState(initialRole);
    

    const handleSubmit = ()=> {
        const { login, password } = fields;
        
        if ( login === user && password === user ) {
            setRole(user);
        } else if( login === admin && password === admin ) {
            setRole(admin);
        } else {
            setRole(unknown);
        }

    }

    return(
        <div className="login-form-root">
            {(role === initialRole || role === unknown) && 
                <div className="login-form-box">
                    <input type="text" onChange={handleChangeFields('login')} />
                    <input type="text" onChange={handleChangeFields('password')} />
                    <button onClick={handleSubmit}>
                        Submit
                    </button>
            </div>}
            { role === user && <Redirect to="/main-page" />}
            { role === admin && <Redirect to="/main-page" />}
        </div>
    )
}

export default LoginForm;