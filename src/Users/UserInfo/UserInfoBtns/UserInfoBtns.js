import React, { useContext, Fragment } from 'react';
import { RoleContext } from '../../../LoginPage/RoleContext/RoleContext';
import { UserPermBtns } from './UserPermBtns';
import { AdminPermBtns } from './AdminPermBtns';

export const UserInfoBtns = ({ setIsUpdating }) => {
    const { role, permission } = useContext(RoleContext);

    return(
        <Fragment>
            { role === permission.user && <UserPermBtns /> }
            { role === permission.admin && <AdminPermBtns setIsUpdating={setIsUpdating} /> }
        </Fragment>
    )
};