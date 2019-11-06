import React from 'react';
import { SidebarUserElem } from './SidebarUserElem';

export const SidebarUser = () => {
    return(
        <nav className="sidebar-user-root">
            <ul>
                <SidebarUserElem />
            </ul>
        </nav>
    )
};