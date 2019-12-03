import React from 'react';
import DevicesForm from '../../../../Components/DevicesForm/DevicesForm';
import { DevicesTable } from '../../../../Components/DevicesTable/DevicesTable';
import './style/style.css';

export const Devices = () => {
    return(
        <div className="devices-root">
            <DevicesForm />
            <DevicesTable />
        </div>
    )
};