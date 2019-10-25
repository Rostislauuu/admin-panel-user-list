import React from 'react';

const Sidebar = ({ switchToUser, switchToAdmin } ) => {
    return(
        <nav className="sidebar"> 
            <ul>
                <li className="sidebar-user">
                    <p onClick={switchToUser}>Users</p>
                </li>
                <li className="sidebar-admin">
                    <p onClick={switchToAdmin}>Admin</p>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar;