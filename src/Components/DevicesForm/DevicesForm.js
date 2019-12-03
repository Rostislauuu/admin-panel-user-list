import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { Select } from 'formik-material-ui';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { withFormik, Field, Form } from 'formik';
import * as Yup from 'yup';

const DevicesForm = ({ values, errors }) => {
    const [ users, setUsers ] = useState([]);
    const [ devices, setDevices ] = useState([]);
    const [ isLoaded, setIsLoaded ] = useState(false);
    const deviceError = !!errors.device;
    const userError = !!errors.user;

    useEffect( () => {
        const source = axios.CancelToken.source();
        const fetchData = async () => {
            try {
                const [ userResponse, devicesResponse ] = await Promise.all([
                    axios.get('http://test-api-vakoms.herokuapp.com/users', { cancelToken: source.token }),
                    axios.get('http://test-api-vakoms.herokuapp.com/users_devices', { cancelToken: source.token })
                ]);

                setUsers(userResponse.data);
                setDevices(devicesResponse.data);
                setIsLoaded(true);
            } catch (error) {
                if( axios.isCancel(error) ) {
                    console.log('cancel request');
                } else {
                    throw error;
                }
            }
        };

        fetchData();

        return () => {
            source.cancel()
        }
    }, []);

    return(
        <Form className="devices-form">
            { isLoaded &&
                <Fragment>

                    <Field name="device" component={Select} displayEmpty={true} error={deviceError} className="device-select" >

                        { !values.devices &&
                            <MenuItem value="">
                                <em>
                                    Select Device
                                </em>
                            </MenuItem>
                        }

                        {
                            devices.map( ( item, index ) => {
                                return <MenuItem key={index} value={item.id}>
                                    <em>
                                        { item.device_name }
                                    </em>
                                </MenuItem>
                            })
                        }

                    </Field>

                    <Field name="user" component={Select} displayEmpty={true} error={userError} className="device-select" >

                        { !values.users &&
                            <MenuItem value="">
                                <em>
                                    Select User
                                </em>
                            </MenuItem>
                        }

                        {
                            users.map( ( user, index ) => {
                                return <MenuItem key={index} value={user.id}>
                                    <em>
                                        { user.fullName }
                                    </em>
                                </MenuItem>
                            })
                        }

                    </Field>

                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>

                </Fragment>
            }
        </Form>
    )
};

export default withFormik({
    validateOnBlur: false,
    validateOnChange: false,

    mapPropsToValues({ device, user }) {
        return {
            device: device || '',
            user: user || ''
        }
    },

    validationSchema: Yup.object().shape({
        device: Yup.string().required('Field is empty'),
        user: Yup.string().required('Field is empty')
    }),

    handleSubmit(values) {
        axios.put(`http://test-api-vakoms.herokuapp.com/users_devices/${values.device}`, {
            user: values.user
        });
    }

}) (DevicesForm)