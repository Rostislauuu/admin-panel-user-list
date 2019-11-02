import React from 'react';

import SidebarUserElem from '../SidebarUser/SidebarUserElem';
import SidebarAdminElem from './SidebarAdminElem';

const SidebarAdmin = () => {
    return (
        <nav className="sidebar-admin-root">
            <ul>
                <SidebarUserElem />
                <SidebarAdminElem />
            </ul>
        </nav>
    )
}

export default SidebarAdmin;