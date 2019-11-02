import React from 'react';

import SidebarUserElem from './SidebarUserElem';

const SidebarUser = () => {
    return(
        <nav className="sidebar-user-root">
            <ul>
                <SidebarUserElem />
            </ul>
        </nav>
    )
}

export default SidebarUser;