import React from 'react';
import { Redirect } from 'react-router-dom';
import './style/style.css';

const LoginForm = ({ handleChangeFields, handleSubmit, role } ) => {
    const user = 'user';
    const admin = 'admin';
    const unknown = 'unknown';
    const initialRole = '';

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