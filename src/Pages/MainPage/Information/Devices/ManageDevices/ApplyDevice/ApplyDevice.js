import React from 'react';
import ManageDevicesForm from '../../../../../../Components/ManageDevicesForm/ManageDevicesForm';
import { useDispatch } from 'react-redux';

export const ApplyDevice = () => {
    const dispatch = useDispatch();
    const buttonName = 'Apply';
    const permission = 'Apply';

    return(
        <div style={{ marginTop: '20px' }}>
            <ManageDevicesForm buttonName={buttonName} permission={permission} dispatch={dispatch} />
        </div>
    )
};