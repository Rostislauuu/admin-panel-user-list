import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useSelector } from 'react-redux';

export const DevicesTable = () => {
    const data = useSelector( state => state.devices );

    return(
        <div className="devices-table">
            <Table>
                <TableHead>
                    <TableRow>

                        <TableCell>
                            Device
                        </TableCell>

                        <TableCell align="right">
                            User
                        </TableCell>

                    </TableRow>
                </TableHead>

                <TableBody>
                    {
                        data.map( ( item, index ) => {
                            return <TableRow key={index}>
                                <TableCell>
                                    { item.device_name }
                                </TableCell>

                                <TableCell align="right">
                                    { item.user ? item.user.fullName : 'None' }
                                </TableCell>
                            </TableRow>
                        })
                    }
                </TableBody>
            </Table>
        </div>
    )
};