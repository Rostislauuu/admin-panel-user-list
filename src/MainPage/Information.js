import React from 'react';
import { renderRoutes } from 'react-router-config';

import { mainPageRoutes } from '../routes/MainPageRoutes';

const Information = ({role}) => {
    return(
            <div className="information-root">
                {renderRoutes(mainPageRoutes)}
            </div>
    )
}

export default Information;