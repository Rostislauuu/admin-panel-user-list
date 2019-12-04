import React, { Fragment, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { AdminContext } from '../../../AddUser/AdminContext/AdminContext';

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

            <button onClick={() => setIsRedirect(true)}>
                Back
            </button>

            <button onClick={onSetUpdating}>
                Update
            </button>

            <button onClick={onDelete}>
                Delete
            </button>
        </Fragment>
    )
};