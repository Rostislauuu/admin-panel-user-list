import React, { useContext } from 'react';

import { RoleContext } from '../../../Context/RoleContext';
import UserPermBtns from './UserPermBtns';
import AdminPermBtns from './AdminPermBtns';


const UserInfoBtns = ({ setIsUpdating }) => {
    const { role, permission } = useContext(RoleContext);

    return(
        <div className="buttons">
            { role === permission.user && <UserPermBtns /> }
            {role === permission.admin && <AdminPermBtns setIsUpdating={setIsUpdating} /> }
        </div>
    )
}

export default UserInfoBtns;