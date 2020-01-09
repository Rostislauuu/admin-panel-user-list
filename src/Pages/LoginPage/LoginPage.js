import React, { Fragment, useContext } from 'react';
import * as Yup from 'yup';
import { Redirect, Route } from 'react-router-dom';
import { withFormik, Form, Field } from 'formik';
import { RoleContext } from "./RoleContext/RoleContext";
import { TextField } from 'formik-material-ui';
import { Button } from '@material-ui/core';
import './style/style.css';

const user = 'user';
const admin = 'admin';

const validateLogin = login => {
    let error;

    if (login !== user && login !== admin) {
      error = "Invalid login";
    }

    return error;
};

const validatePassword = password => {
    let error;

    if(password !== user && password !== admin) {
        error = 'Invalid password';
    }

    return error;
};

const LoginPage = ({ errors, touched }) => {
    const { role, setRole } = useContext(RoleContext);
    setRole( localStorage.getItem('permission') );

    return(
        <Route exact path="/">
            <div className="login-form-root">
                <Form className="login-form-box">
                    <Fragment>
                        { touched.login && errors.login &&
                            <p style={{ display: 'none' }}>
                                {errors.login}
                            </p>
                        }

                        <Field type="text" label="Login" name="login" validate={validateLogin}
                               component={TextField}
                        />
                    </Fragment>

                    <Fragment>
                        { touched.password && errors.password &&
                            <p style={{ display: 'none' }}>
                                {errors.password}
                            </p>
                        }

                        <Field type="password" label="Password" name="password" validate={validatePassword}
                               component={TextField} style={{ marginTop: '10px' }}
                        />
                    </Fragment>

                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </Form>
                
                { ( role  &&  localStorage.getItem('jwt') ) && <Redirect to="/main-page" /> }
            </div>
        </Route>
    )
};

export default withFormik({
    validateOnBlur: false,
    validateOnChange: false,

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
       if( values.login === user && values.password === user ) {
           values.role = user;
           localStorage.setItem('permission', values.role);
           localStorage.setItem('jwt', 'hello');
           
       } else if ( values.login === admin && values.password === admin ) {
           values.role = admin;
           localStorage.setItem('permission', values.role);
           localStorage.setItem('jwt', 'hello');
       } 

        resetForm();
    }
}) (LoginPage);