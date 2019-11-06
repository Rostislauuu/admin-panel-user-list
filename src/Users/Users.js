import React from 'react';
import { renderRoutes } from 'react-router-config';
import { usersListRoutes } from './routes/UsersListRoutes';
import './style/style.css';

export const Users = () => {
        return (
            <div className="user-search-root">
                {renderRoutes(usersListRoutes)}
            </div>
        )
};