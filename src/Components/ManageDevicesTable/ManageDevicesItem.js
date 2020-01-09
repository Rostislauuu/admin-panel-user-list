import React, { useState } from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import { TextField } from 'formik-material-ui';
import { Field, withFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { deleteDevice } from '../../store/actions/devices/deleteDevice';
import { updateDevice } from '../../store/actions/devices/updateDevice';
import axios from 'axios';

const ManageDevicesItem = ({ values }) => {
    const [ isDisabled, setIsDisabled ] = useState(true);
    const dispatch = useDispatch();

    const onHandleDelete = () => {
        axios.delete(`http://test-api-vakoms.herokuapp.com/users_devices/${values.id}`);
        dispatch( deleteDevice(values.id) );
    };

    const handleSetUpdating = () => {
        setIsDisabled(!isDisabled);
    };

    const handleSubmit = () => {
        axios.put(`http://test-api-vakoms.herokuapp.com/users_devices/${values.id}`, {
            device_name: values.device
        }).then( device => dispatch( updateDevice(device.data) ));
        setIsDisabled(!isDisabled);
    };

    return(
        <TableBody>
            <TableRow>
                <TableCell align="center">
                    <Field type="text" name="device" value={values.device} component={TextField}
                           disabled={isDisabled}
                    />
                </TableCell>

                <TableCell>
                    { isDisabled &&
                        <EditIcon onClick={handleSetUpdating} style={{ marginRight: '10px', cursor: 'pointer' }} />
                    }

                    { !isDisabled &&
                        <CheckIcon onClick={handleSubmit} style={{ marginRight: '10px', cursor: 'pointer' }}/>
                    }

                    <DeleteIcon style={{ cursor: 'pointer' }} onClick={onHandleDelete} />
                </TableCell>
            </TableRow>
        </TableBody>
    )
};

export default withFormik({
    mapPropsToValues({ device, id }) {
        return {
            device,
            id
        }
    }
}) (ManageDevicesItem)