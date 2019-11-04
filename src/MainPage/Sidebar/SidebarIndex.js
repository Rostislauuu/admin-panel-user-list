import React, { useContext } from 'react';
import './style/style.css';

import SidebarUser from './SidebarUser/SidebarUser';
import SidebarAdmin from './SidebarAdmin/SidebarAdmin';
import { RoleContext } from '../../Context/RoleContext';

const Sidebar = () => {
    const { role, permission } = useContext(RoleContext);

    return(
        <div className="sidebar-root-box">  
            {role === permission.user && <SidebarUser />}
            {role === permission.admin && <SidebarAdmin />}
        </div>
    )
}

export default Sidebar;