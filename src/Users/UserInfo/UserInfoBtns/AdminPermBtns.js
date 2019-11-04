import React, { Fragment, useContext } from 'react'
import { AdminFuncContext } from '../../../Context/AdminFuncContext';
import { useParams } from 'react-router-dom';

const AdminPermBtns = ({ setIsUpdating }) => {
    const { setIsRedirect, returnBack, deleteUser } = useContext(AdminFuncContext);

    let { id } = useParams();
    const onDelete = () => {
        deleteUser(id);
        setIsRedirect(true);
    }

    const onSetUpdating = () => {
        setIsUpdating(true);
    }

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
}

export default AdminPermBtns;