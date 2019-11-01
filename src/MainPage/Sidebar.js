import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({role}) => {
    const user = 'user';
    const admin = 'admin';

    return(
        <nav className="sidebar"> 
            <ul>
                {role === user &&
                    <li className="sidebar-user">
                        <Link to="/main-page/users" style={{ textDecoration: 'none', color: '#212121' }}>
                            <p>
                                Users
                            </p>
                        </Link>
                    </li>
                }
                { role === admin &&
                    <li className="sidebar-admin">
                        <Link to="/main-page/admin" style={{ textDecoration: 'none', color: '#212121' }}>
                            <p>
                                Admin
                            </p>
                        </Link>
                    </li>
                }
            </ul>
        </nav>
    )
}

export default Sidebar;