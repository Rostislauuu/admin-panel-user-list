import React from 'react';
import { DevicesTable } from '../../../../../Components/DevicesTable/DevicesTable';
import '../style/style.css';

export const DevicesList = () => {
    return(
        <div className="devices-root">
            <DevicesTable />
        </div>
    )
};