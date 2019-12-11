import React from 'react';
import ManageDevicesForm from '../../../../../../Components/ManageDevicesForm/ManageDevicesForm';
import { useDispatch } from 'react-redux';

export const AddDevice = () => {
    const dispatch = useDispatch();
    const buttonName = 'Add';
    const permission = 'Add';

    return(
        <ManageDevicesForm buttonName={buttonName} permission={permission} dispatch={dispatch} />
    )
};