import React, { Fragment, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Select } from 'formik-material-ui';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { TextField } from 'formik-material-ui';
import { directions } from './directions';
import { subdirections } from './subdirections';
import { addUser } from '../../store/actions/users/addUser';
import { updateUser } from '../../store/actions/users/updateUser';

const adminRoutePath = "/main-page/admin";

const UserForm = ({ errors, values }) => {
    let isDirection = !values.direction;
    const  subdirectionsToShow = subdirections.filter( item => {
        return values.direction === item.type ? item.typeName : null
    });

    const fullNameError = !!errors.fullName;
    const birthdayError = !!errors.birthday;
    const directionError = !!errors.direction;
    const subdirectionError = !!errors.subdirection;
    const emailError = !!errors.email;
    const phoneError = !!errors.phone;

    useEffect( () => {
        if( values.pathname === adminRoutePath ) {
            values.subdirection = '';
        }

    }, [values.direction]);

    return(
        <Form className="user-form">

            <Fragment>
                <Field type="text" label="Name" name="fullName" value={values.fullName}
                       error={fullNameError} component={TextField}
                />
            </Fragment>

            <Fragment>
                <Field type="text" label="Birthday" name="birthday" value={values.birthday}
                       component={TextField} error={birthdayError} style={{ marginTop: '15px' }}
                />
            </Fragment>

            <Fragment>
                <Field name="direction" component={Select} displayEmpty={true} error={directionError}
                        style={{ marginTop: '35px' }} className="select-field"
                >

                    { !values.selectedUser.direction &&
                        <MenuItem value="">
                            <em>
                                Select Direction
                            </em>
                        </MenuItem>
                    }

                    {
                        directions.map(( item, index ) => {
                            return <MenuItem key={index} value={item.type}>
                                <em>
                                    { item.type }
                                </em>
                            </MenuItem>
                        })
                    }

                </Field>

            </Fragment>

            <Fragment>
                <Field name="subdirection" component={Select} displayEmpty={true} disabled={isDirection}
                       error={subdirectionError} style={{ marginTop: '35px' }} className="select-field"
                >

                    { !values.selectedUser.subdirection  &&
                        <MenuItem value="">
                            <em>
                                Select Subdirection
                            </em>
                        </MenuItem>
                    }

                    {
                        subdirectionsToShow.map( ( item, index ) => {
                            return <MenuItem key={index} value={item.typeName}>
                                <em>
                                    { item.typeName }
                                </em>
                            </MenuItem>
                        })
                    }

                </Field>
            </Fragment>

            <Fragment>
                <Field type="email" label="Email" name="email" value={values.email}
                       component={TextField} error={emailError} style={{ marginTop: '15px' }}
                />
            </Fragment>

            <Fragment>
                <Field type="text" label="Phone" name="phone" value={values.phone}
                       component={TextField} error={phoneError} style={{ marginTop: '15px' }}
                />
            </Fragment>

            <Button variant="contained" color="primary" type="submit"
                    style={{ marginTop: '30px' }}
            >
                Submit
            </Button>

        </Form>
    )
};

export const UserFormValidation = withFormik({
    validateOnBlur: false,
    validateOnChange: false,

    mapPropsToValues({ pathname, id, selectedUser, setIsUpdating, setSelectedUser, dispatch }) {
        return {
            id,
            ...selectedUser,
            pathname,
            selectedUser: selectedUser || '', // for image
            setIsUpdating,
            setSelectedUser,
            dispatch
        }
    },

    validationSchema: Yup.object().shape({
        fullName: Yup.string().required('Field is empty'),
        birthday: Yup.string().required('Field is empty'),
        direction: Yup.string().required('Field is empty'),
        subdirection: Yup.string().required('Field is empty'),
        email: Yup.string().email('Email must be valid').required('Field is empty'),
        phone: Yup.string().matches(/^\d{10}$/, 'Phone number must be 10 numbers long').required('Field is empty')
    }),

    handleSubmit(values, {resetForm}) {
        const dataToSend = {
            id: values.selectedUser.id,
            fullName: values.fullName,
            birthday: values.birthday,
            direction: values.direction,
            subdirection: values.subdirection,
            email: values.email,
            phone: values.phone,
            img: values.selectedUser.img
        };

        if (values.pathname === adminRoutePath) {
            values.dispatch( addUser(dataToSend) );

        } else {
            values.dispatch( ( updateUser(dataToSend)) );
            setTimeout(() => values.setIsUpdating(false), 1);
            values.setSelectedUser(dataToSend);
        }

        resetForm();
    }

})(UserForm);