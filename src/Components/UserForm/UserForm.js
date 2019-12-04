import React, { Fragment, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Select } from 'formik-material-ui';
import MenuItem from '@material-ui/core/MenuItem';
import { FormHelperText } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import { directions } from './directions';
import { subdirections } from './subdirections';

const adminRoutePath = "/main-page/admin";

const UserForm = ({touched, errors, values}) => {
    let isDirection = !values.direction;
    const  subdirectionsToShow = subdirections.filter( item => {
        return values.direction === item.type ? item.typeName : null
    });

    useEffect( () => {
        if( values.pathname === adminRoutePath ) {
            values.subdirection = '';
        }

    }, [values.direction]);

    return(
        <Form className="user-form">

            <label>
                Name
            </label>
            <Fragment>

                {touched.fullName && errors.fullName &&
                    <p style={{display: 'none'}}>
                        {errors.fullName}
                    </p>
                }

                <Field type="text" name="fullName" value={values.fullName} component={TextField} />
            </Fragment>

            <label>
                Birthday
            </label>
            <Fragment>

                {touched.birthday && errors.birthday &&
                    <p style={{display: 'none'}}>
                        {errors.birthday}
                    </p>
                }

                <Field type="text" name="birthday" value={values.birthday} component={TextField} />
            </Fragment>

            <label>
                Direction
            </label>
            <Fragment>

                {touched.direction && errors.direction &&
                    <FormHelperText style={{color: 'red'}}>
                        { errors.direction }
                    </FormHelperText>
                }

                <Field name="direction" component={Select} displayEmpty={true} className="select-field" >

                    {!values.selectedUser.direction &&
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

            <label>
                Subdirection
            </label>
            <Fragment>

                {touched.subdirection && errors.subdirection &&
                    <FormHelperText style={{color: 'red'}}>
                        { errors.subdirection }
                    </FormHelperText>
                }

                <Field name="subdirection" component={Select} displayEmpty={true}
                       disabled={isDirection} className="select-field"
                >

                    {!values.selectedUser.subdirection  &&
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

            <label>
                Email
            </label>
            <Fragment>

                {touched.email && errors.email &&
                    <p style={{display: 'none'}}>
                        {errors.email}
                    </p>
                }

                <Field type="email" name="email" value={values.email} component={TextField} />
            </Fragment>

            <label>
                Phone
            </label>
            <Fragment>

                {touched.phone && errors.phone &&
                    <p style={{display: 'none'}}>
                        {errors.phone}
                    </p>
                }

                <Field type="text" name="phone" value={values.phone} component={TextField} />
            </Fragment>

            <button type="submit">
                Submit
            </button>

        </Form>
    )
};

export const UserFormValidation = withFormik({
    validateOnBlur: false,
    validateOnChange: false,

    mapPropsToValues({ pathname, id, selectedUser, setIsUpdating, setSelectedUser }) {
        return {
            id,
            ...selectedUser,
            pathname,
            selectedUser: selectedUser || '', // for image
            setIsUpdating,
            setSelectedUser
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
            fullName: values.fullName,
            birthday: values.birthday,
            direction: values.direction,
            subdirection: values.subdirection,
            email: values.email,
            phone: values.phone,
            img: values.selectedUser.img
        };

        if (values.pathname === adminRoutePath) {
            fetch("http://test-api-vakoms.herokuapp.com/users/", {
                method: "POST",
                header: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dataToSend)
            });
        } else {
            fetch(`http://test-api-vakoms.herokuapp.com/users/${values.id}`, {
                method: "PUT",
                header: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dataToSend)
            });

            setTimeout(() => values.setIsUpdating(false), 1);
            values.setSelectedUser(dataToSend);
        }

        resetForm();
    }

})(UserForm);