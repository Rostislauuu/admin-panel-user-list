import React, { useContext, Fragment } from 'react';
import { RoleContext } from '../../../../../LoginPage/RoleContext/RoleContext';
import { UserButtons } from './UserButtons';
import { AdminButtons } from './AdminButtons';

export const Buttons = ({ setIsUpdating }) => {
    const { role, permission } = useContext(RoleContext);

    return(
        <Fragment>
            { role === permission.user && <UserButtons /> }
            { role === permission.admin && <AdminButtons setIsUpdating={setIsUpdating} /> }
        </Fragment>
    )
};