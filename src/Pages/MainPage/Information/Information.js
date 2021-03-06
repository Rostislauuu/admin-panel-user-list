import React from 'react';
import { renderRoutes } from 'react-router-config';
import { mainPageRoutes } from '../routes/MainPageRoutes';

export const Information = () => {
    return(
        <div className="information-root">
            { renderRoutes(mainPageRoutes) }
        </div>
    )
};