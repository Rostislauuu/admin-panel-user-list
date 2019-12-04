import React from 'react';
import ManageDevicesForm from '../../../../../../Components/ManageDevicesForm/ManageDevicesForm';

export const DeleteDevice = () => {
    const buttonName = 'Delete';
    const permission = 'Delete';

    return(
        <div>
            <ManageDevicesForm buttonName={buttonName} permission={permission} />
        </div>
    )
};