import React from 'react';
import ManageDevicesForm from '../../../../../../Components/ManageDevicesForm/ManageDevicesForm';
import { useDispatch } from 'react-redux';

export const AddDevice = () => {
    const dispatch = useDispatch();
    const addDevice = 'Add';

    return(
        <ManageDevicesForm buttonName={addDevice} permission={addDevice} dispatch={dispatch} />
    )
};