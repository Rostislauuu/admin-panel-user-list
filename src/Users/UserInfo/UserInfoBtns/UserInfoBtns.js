import React, { useContext } from 'react';
import { RoleContext } from '../../../LoginPage/RoleContext/RoleContext';
import { UserPermBtns } from './UserPermBtns';
import { AdminPermBtns } from './AdminPermBtns';

export const UserInfoBtns = ({ setIsUpdating }) => {
    const { role, permission } = useContext(RoleContext);

    return(
        <div className="buttons">
            { role === permission.user && <UserPermBtns /> }
            { role === permission.admin && <AdminPermBtns setIsUpdating={setIsUpdating} /> }
        </div>
    )
};