import React, { Fragment, useContext } from 'react';
import Button from '@material-ui/core/Button';
import { useParams } from 'react-router-dom';
import { AdminContext } from '../../../AddUser/AdminContext/AdminContext';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../../../../../store/actions/users/deleteUser';
import axios from "axios";

export const AdminButtons = ({ setIsUpdating }) => {
    const dispatch = useDispatch();
    const { setIsRedirect, returnBack } = useContext(AdminContext);
    let { id } = useParams();

    const handleDelete = () => {
        axios.delete(`http://test-api-vakoms.herokuapp.com/users/${id}`);
        dispatch( deleteUser(id) );
        setIsRedirect(true);
    };

    const handleSetUpdating = () => {
        setIsUpdating(true);
    };

    return (
        <Fragment>
            {returnBack()}

            <Button variant="contained" color="primary" onClick={() => setIsRedirect(true)}
                    style={{ marginRight: '10px' }}
            >
                Back
            </Button>

            <Button variant="contained" color="primary" onClick={handleSetUpdating}
                    style={{ marginRight: '10px' }}
            >
                Update
            </Button>

            <Button variant="contained" color="primary" onClick={handleDelete}
                    style={{ marginRight: '10px' }}
            >
                Delete
            </Button>
        </Fragment>
    )
};