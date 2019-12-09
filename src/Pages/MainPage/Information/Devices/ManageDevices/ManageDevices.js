import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import { renderRoutes } from 'react-router-config';
import { manageDevicesRoutes } from './routes/manageDevicesRoutes';
import { Link } from 'react-router-dom';

export const ManageDevices = () => {
    return(
       <Fragment>
           <div className="manage-devices-buttons">

               <div className="first-row">

                   <Link to="/main-page/manage_devices/apply" style={{ textDecoration: 'none' }}>
                       <Button variant="contained" color="primary">
                           Apply Device
                       </Button>
                   </Link>

                   <Link to="/main-page/manage_devices/add" style={{ textDecoration: 'none' }}>
                       <Button variant="contained" color="primary">
                           Add Device
                       </Button>
                   </Link>

               </div>

               <div className="second-row">

                   <Link to="/main-page/manage_devices/update" style={{ textDecoration: 'none' }}>
                       <Button variant="contained" color="primary">
                           Update Device
                       </Button>
                   </Link>

                   <Link to="/main-page/manage_devices/delete" style={{ textDecoration: 'none' }}>
                       <Button variant="contained" color="primary">
                           Delete Device
                       </Button>
                   </Link>

               </div>

           </div>

           <div className="manage-devices-action">
               { renderRoutes(manageDevicesRoutes) }
           </div>

       </Fragment>
    )
};