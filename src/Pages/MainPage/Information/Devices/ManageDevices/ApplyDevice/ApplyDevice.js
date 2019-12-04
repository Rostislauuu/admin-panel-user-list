import React from 'react';
import ManageDevicesForm from '../../../../../../Components/ManageDevicesForm/ManageDevicesForm';

export const ApplyDevice = () => {
    const buttonName = 'Apply';
    const permission = 'Apply';

    return(
        <div>
            <ManageDevicesForm buttonName={buttonName} permission={permission} />
        </div>
    )
};