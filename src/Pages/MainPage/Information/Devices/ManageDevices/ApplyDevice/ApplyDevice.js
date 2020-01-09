import React from 'react';
import ManageDevicesForm from '../../../../../../Components/ManageDevicesForm/ManageDevicesForm';
import { useDispatch } from 'react-redux';

export const ApplyDevice = () => {
    const dispatch = useDispatch();
    const applyDevice = 'Apply'

    return(
        <div style={{ marginTop: '20px' }}>
            <ManageDevicesForm buttonName={applyDevice} permission={applyDevice} dispatch={dispatch} />
        </div>
    )
};