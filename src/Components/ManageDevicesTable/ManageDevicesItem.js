import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { TextField } from 'formik-material-ui';
import { Field, withFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { deleteDevice } from '../../store/actions/devices/deleteDevice';
import axios from "axios";

export const ManageDevicesItem = ({ device }) => {
    const dispatch = useDispatch();
    const onHandleDelete = () => {
        axios.delete(`http://test-api-vakoms.herokuapp.com/users_devices/${device.id}`);
        dispatch( deleteDevice(device.id) );
    };

    return(
        <TableBody>
            <TableRow>

                <TableCell>
                    {/*<Field type="text" name="device" value={device.device.name} component={TextField} />*/}
                    { device.device_name }
                </TableCell>

                {/*MAKE EDIT*/}
                <TableCell align="right">
                    <EditIcon style={{ marginRight: '10px', cursor: 'pointer' }}/>
                    <DeleteIcon style={{ cursor: 'pointer' }} onClick={onHandleDelete} />
                </TableCell>

            </TableRow>
        </TableBody>
    )
};