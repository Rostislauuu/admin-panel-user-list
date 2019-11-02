import React from 'react';
import './style/style.css';

import SidebarUser from './SidebarUser/SidebarUser';
import SidebarAdmin from './SidebarAdmin/SidebarAdmin';

const Sidebar = ({role}) => {
    const user = 'user';
    const admin = 'admin';

    return(
        <div className="sidebar-root-box">  
            {role === user && <SidebarUser />}
            {role === admin && <SidebarAdmin />}
        </div>
    )
}

export default Sidebar;