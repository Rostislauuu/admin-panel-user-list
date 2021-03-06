import React, { useContext } from 'react';
import { SidebarUser } from './SidebarUser/SidebarUser';
import { SidebarAdmin } from './SidebarAdmin/SidebarAdmin';
import { RoleContext } from '../../LoginPage/RoleContext/RoleContext';
import './style/style.css';

export const Sidebar = () => {
    const { role, permission } = useContext(RoleContext);

    return(
        <div className="sidebar-root-box">  
            {role === permission.user && <SidebarUser />}
            
            {role === permission.admin && <SidebarAdmin />}
        </div>
    )
};