import React, { Fragment } from 'react';
import { renderRoutes } from 'react-router-config';
import { usersListRoutes } from './routes/UsersListRoutes';
import './style/style.css';

export const Users = () => {
       return(
            <Fragment>
                {renderRoutes(usersListRoutes)}
            </Fragment>
       )
};