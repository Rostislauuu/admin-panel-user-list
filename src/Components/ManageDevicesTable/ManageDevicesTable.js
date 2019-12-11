import React from 'react';
import Table from '@material-ui/core/Table';
import { useSelector } from 'react-redux';
import ManageDevicesItem from './ManageDevicesItem';

export const ManageDevicesTable = () => {
    const devices = useSelector( state => state.devices );

    return(
        <div className="manage-devices-table-root">
            <div className="manage-devices-table">
                <Table>
                    {
                        devices.map( ( item, index ) => {
                            return <ManageDevicesItem key={index} device={item.device_name} id={item.id}/>
                        })
                    }
                </Table>
            </div>
        </div>
    )
};