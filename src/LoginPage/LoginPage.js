import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { RoleContext } from './RoleContext/RoleContext';
import './style/style.css';

export const LoginPage = () => {
    const { role, permission, handleChangeFields, handleSubmit } = useContext(RoleContext);

    const logIn = () => {
        handleSubmit();
    };

    return(
        <Route exact path="/">
            <div className="login-form-root">

                {(role === permission.initialRole || role === permission.unknown) && 
                    <div className="login-form-box">

                        <input type="text" onChange={handleChangeFields('login')} />
                        <input type="text" onChange={handleChangeFields('password')} />

                        <button onClick={logIn}>
                            Submit
                        </button>
                </div>}
                
                { (role === permission.user  &&  localStorage.getItem('jwt') ) && <Redirect to="/main-page" /> }
                { (role === permission.admin && localStorage.getItem('jwt') ) && <Redirect to="/main-page" />}

            </div>
        </Route>
    )
};