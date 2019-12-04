import React from 'react';
import ManageDevicesForm from '../../../../../../Components/ManageDevicesForm/ManageDevicesForm';

export const UpdateDevice = () => {
    const buttonName = 'Update';
    const permission = 'Update';

    return(
        <div>
            <ManageDevicesForm buttonName={buttonName} permission={permission} />
        </div>
    )
};