import React from 'react';
import { Link } from 'react-router-dom';

export const SidebarAdminElem = () => {
    return (
        <li className="sidebar-admin">
            <Link to="/main-page/admin" style={{ textDecoration: 'none', color: '#212121' }} >
                <p>
                    Admin
                </p>
            </Link>
        </li>
    )
};