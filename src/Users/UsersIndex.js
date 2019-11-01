import React from 'react';
import { renderRoutes } from 'react-router-config';

import { usersListRoutes } from './UsersRoutes/UsersListRoutes';

const Users = () => {
        return (
            <div className="user-search-root">
                {renderRoutes(usersListRoutes)}
            </div>
        )
}

export default Users;