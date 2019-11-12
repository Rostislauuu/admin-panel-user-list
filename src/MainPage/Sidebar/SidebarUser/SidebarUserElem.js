import React from 'react';
import { Link } from 'react-router-dom';

export const SidebarUserElem = () => {
    return(
        <li className="sidebar-user">

            <Link  to="/main-page/users" style={{ textDecoration: 'none', color: '#212121' }} >
                <p>
                    Users
                </p>
            </Link>

        </li>
    )
};