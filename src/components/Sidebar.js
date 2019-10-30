import React from 'react';

const Sidebar = ({ switchToUser, switchToAdmin } ) => {
    return(
        <nav className="sidebar"> 
            <ul>
                <li className="sidebar-user" onClick={switchToUser}>
                    <p>
                        Users
                    </p>
                </li>
                <li className="sidebar-admin" onClick={switchToAdmin}>
                    <p>
                        Admin
                    </p>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar;