import React, { Fragment } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

const adminRoutePath = "/main-page/admin";

const UserForm = ({ touched, errors, values }) => {           
    return(
        <Form className="user-form">

            <label>
                Name
            </label>
            <Fragment>
                {touched.fullName && errors.fullName &&
                    < p style={{ fontSize: '13px', color: 'red', marginBottom: "5px" }}>
                        {errors.fullName}
                    </p>
                }
                <Field type="text" name="fullName" value={values.fullName} />
            </Fragment>

            <label>
                Birthday
            </label>
            <Fragment>
                {touched.birthday && errors.birthday &&
                    < p style={{ fontSize: '13px', color: 'red', marginBottom: "5px" }}>
                        {errors.birthday}
                    </p>
                }
                <Field type="text" name="birthday" value={values.birthday} />
            </Fragment>

            <label>
                Direction
            </label>
            <Fragment>
                {touched.direction && errors.direction &&
                    <p style={{ fontSize: '13px', color: 'red', marginBottom: "5px" }}>
                        {errors.direction}
                    </p>
                }
                <Field type="text" name="direction" value={values.direction} />
            </Fragment>

            <label>
                Email
            </label>
            <Fragment>
                {touched.email && errors.email &&
                    < p style={{ fontSize: '13px', color: 'red', marginBottom: "5px" }}>
                        {errors.email}
                    </p>
                }
                <Field type="email" name="email" value={values.email} />
            </Fragment>

            <label>
                Phone
            </label>
            <Fragment>
                {touched.phone && errors.phone &&
                    < p style={{ fontSize: '13px', color: 'red', marginBottom: "5px" }}>
                        {errors.phone}
                    </p>
                }
                <Field type="text" name="phone" value={values.phone} />
            </Fragment>

            <button type="submit">
                Submit
            </button>

        </Form>
    )
};

export const UserFormValidation = withFormik({
    mapPropsToValues({ pathname, id, selectedUser, setIsUpdating, setSelectedUser  } ) {
        return {
            id,
            ...selectedUser,
            pathname,
            selectedUser: selectedUser || '',
            setIsUpdating,
            setSelectedUser
        }
    },

    validationSchema: Yup.object().shape({
        fullName: Yup.string().required('Field is empty'),
        birthday: Yup.string().required('Field is empty'),
        direction: Yup.string().required('Field is empty'),
        email: Yup.string().email('Email must be valid').required('Field is empty'),
        phone: Yup.string().matches( /^\d{10}$/, 'Phone number must be 10 numbers long').required('Field is empty')
    }),

    handleSubmit(values, { resetForm } ) {
        const dataToSend = {
            fullName: values.fullName,
            birthday: values.birthday,
            direction: values.direction,
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

          setTimeout( () => values.setIsUpdating(false), 1 );
          values.setSelectedUser(dataToSend);
        }
        
        resetForm();
    }

}) (UserForm);