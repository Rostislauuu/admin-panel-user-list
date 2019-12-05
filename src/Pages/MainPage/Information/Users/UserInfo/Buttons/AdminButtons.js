import React, { Fragment, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { AdminContext } from '../../../AddUser/AdminContext/AdminContext';
import Button from '@material-ui/core/Button';

export const AdminButtons = ({ setIsUpdating }) => {
    const { setIsRedirect, returnBack, deleteUser } = useContext(AdminContext);
    let { id } = useParams();

    const onDelete = () => {
        deleteUser(id);
        setIsRedirect(true);
    };

    const onSetUpdating = () => {
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

            <Button variant="contained" color="primary" onClick={onSetUpdating}
                    style={{ marginRight: '10px' }}
            >
                Update
            </Button>

            <Button variant="contained" color="primary" onClick={onDelete}
                    style={{ marginRight: '10px' }}
            >
                Delete
            </Button>
        </Fragment>
    )
};