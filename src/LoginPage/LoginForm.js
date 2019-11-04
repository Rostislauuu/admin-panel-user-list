import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import './style/style.css';

import { RoleContext } from '../Context/RoleContext';

const LoginForm = () => {
    const { role, permission, handleChangeFields, handleSubmit } = useContext(RoleContext);

    return(
        <div className="login-form-root">
            {(role === permission.initialRole || role === permission.unknown) && 
                <div className="login-form-box">
                    <input type="text" onChange={handleChangeFields('login')} />
                    <input type="text" onChange={handleChangeFields('password')} />
                <button onClick={handleSubmit}>
                        Submit
                    </button>
            </div>}
            {role === permission.user && <Redirect to="/main-page" />}
            {role === permission.admin && <Redirect to="/main-page" />}
        </div>
    )
}

export default LoginForm;