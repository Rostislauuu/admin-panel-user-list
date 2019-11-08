import React, { Fragment, useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { RoleContext } from './RoleContext/RoleContext';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './style/style.css';

const validateLogin = (login) => {
    let error;

    if ( login !== 'user' && login !== 'admin' ) {
        error = 'Invalid login'
    }

    return error;
};

const validatePassword = password => {
    let error;

    if( password !== 'user' && password !== 'admin') {
        error = 'Invalid password';
    }

    return error;
};

const LoginPage = ({ errors, touched }) => {
    const { role, permission, setRole } = useContext(RoleContext);
    setRole( localStorage.getItem('permission') );

    return(
        <Route exact path="/">
            <div className="login-form-root">

                <Form className="login-form-box">
                    <Fragment>
                        { touched.login && errors.login && 
                            <p style={{ fontSize: '13px', color: 'red', marginBottom: "5px" }}>
                                {errors.login}
                            </p>
                        }
                        <Field type="text" name="login" placeholder="Login" validate={validateLogin} />
                    </Fragment>
                    <Fragment>
                        { touched.password && errors.password &&
                            <p style={{ fontSize: '13px', color: 'red', marginBottom: "5px" }}>
                                {errors.password}
                            </p>
                        }
                        <Field type="password" name="password" placeholder="Password" validate={validatePassword} />
                    </Fragment>

                    <button type="submit">
                        Submit
                    </button>
                </Form>
                
                { ( role === permission.user  &&  localStorage.getItem('jwt') ) && <Redirect to="/main-page" /> }
                { ( role === permission.admin && localStorage.getItem('jwt') ) && <Redirect to="/main-page" /> }
                
            </div>
        </Route>
    )
};

export default withFormik({
    mapPropsToValues(){
        return {
            login: '',
            password: '',
            role: null
        }
    },

    validationSchema: Yup.object().shape({
        login: Yup.string().required('Field is empty'),
        password: Yup.string().required('Field is empty')
    }),

    handleSubmit( values, { resetForm } ) {
       if( values.login === 'user' && values.password === 'user' ) {
           values.role = 'user';
           localStorage.setItem('permission', values.role);
           localStorage.setItem('jwt', 'hello');
       } else if ( values.login === 'admin' && values.password === 'admin' ) {
           values.role = 'admin';
           localStorage.setItem('permission', values.role);
           localStorage.setItem('jwt', 'hello');
       } 

        resetForm();
    }
}) (LoginPage);