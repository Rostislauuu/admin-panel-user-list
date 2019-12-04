import React from 'react';
import ManageDevicesForm from '../../../../../../Components/ManageDevicesForm/ManageDevicesForm';

export const AddDevice = () => {
    const buttonName = 'Add';
    const permission = 'Add';

    return(
        <div>
            <ManageDevicesForm buttonName={buttonName} permission={permission} />
        </div>
    )
};