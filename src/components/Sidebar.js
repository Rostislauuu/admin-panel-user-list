import React from 'react';

const Sidebar = ({ switchToUser, switchToAdmin} ) => {
    return(
        <nav className="sidebar"> 
            <div className="sidebar-user">
                <p onClick={switchToUser}>Users</p>
            </div>
            <div className="sidebar-admin" > 
                <p onClick={switchToAdmin}>Admin</p>
            </div>
        </nav>
    )
}

export default Sidebar;