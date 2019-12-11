import React, { Fragment } from 'react';
import {Select, TextField} from 'formik-material-ui';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { withFormik, Field, Form } from 'formik';
import { useSelector } from 'react-redux';
import { addDevice } from '../../store/actions/devices/addDevice';
import {applyDevice} from "../../store/actions/devices/applyDevice";
import axios from "axios";

const permission = {
    apply: 'Apply',
    add: 'Add'
};

const validateDevice = device => {
    let error;

    if( device === '' ) {
        error = 'Field is empty';
    }

    return error;
};

const validateUser = user => {
    let error;

    if( user === '' ) {
        error = 'Field is empty';
    }

    return error;
};

const validateNewValue = newValue => {
    let error;

    if( newValue === '' ) {
        error = 'Field is empty';
    }

    return error;
};

const ManageDevicesForm = ({ values, errors }) => {
    const devices = useSelector( state => state.devices );
    const users = useSelector( state => state.users );
    const userError = !!errors.user;
    const deviceError = !!errors.device;
    const newValueError = !!errors.newValue;

    return(
        <Form style={{ display: 'flex', flexDirection: 'column' }}>
           <Fragment>

               { values.permission === permission.apply  &&
                   <Fragment>

                       <Field name="device" component={Select} displayEmpty={true} error={deviceError}
                              validate={validateDevice} className="device-select" style={{ width: '100%' }}
                       >
                           <MenuItem value="">
                               <em>
                                   Select Device
                               </em>
                           </MenuItem>

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

                       <Field name="user" component={Select} displayEmpty={true} error={userError} validate={validateUser}
                              className="device-select" style={{ width: '100%', marginTop: '20px' }}
                       >
                           <MenuItem value="">
                               <em>
                                   Select User
                               </em>
                           </MenuItem>

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

                   </Fragment>
               }

               { values.permission === permission.add &&
                   <Field type="text" name="newValue" label="New Device" validate={validateNewValue}
                          error={newValueError} component={TextField} style={{ marginTop: '20px' }}
                   />
               }

               <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
                   { values.buttonName }
               </Button>

           </Fragment>
        </Form>
    )
};

export default withFormik({
    validateOnBlur: false,
    validateOnChange: false,

    mapPropsToValues({ user, device, newValue, buttonName, permission, dispatch }) {
        return {
            user: user || '',
            device: device || '',
            newValue: newValue || '',
            buttonName: buttonName || '',
            permission: permission || '',
            dispatch
        }
    },

    handleSubmit(values, { resetForm }) {
        if( values.permission === permission.apply ) {
            axios.put(`http://test-api-vakoms.herokuapp.com/users_devices/${values.device}`, {
                user: values.user
            }).then( device => values.dispatch( applyDevice(device.data) ))

        } else if( values.permission === permission.add ) {
            axios.post('http://test-api-vakoms.herokuapp.com/users_devices/', {
                device_name: values.newValue
            }).then( device => values.dispatch( addDevice(device.data) ) );

        }

        resetForm();
    }
}) (ManageDevicesForm);