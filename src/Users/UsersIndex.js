import React from 'react';
import { renderRoutes } from 'react-router-config';
import './style/style.css';

import { usersListRoutes } from './Routes/UsersListRoutes';

const Users = () => {
        return (
            <div className="user-search-root">
                {renderRoutes(usersListRoutes)}
            </div>
        )
}

export default Users;