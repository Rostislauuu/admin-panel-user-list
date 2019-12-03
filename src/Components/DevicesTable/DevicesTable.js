import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export const DevicesTable = () => {
    const [ data, setData ] = useState([]);
    const [ isLoaded, setIsLoaded ] = useState(false);

    useEffect( () => {
        const source = axios.CancelToken.source();
        const fetchData = async () => {
            try {
                const response = await axios.get('http://test-api-vakoms.herokuapp.com/users_devices', {
                    cancelToken: source.token
                });

                setData(response.data);
                setIsLoaded(true);
            } catch (error) {
                if( axios.isCancel(error) ) {
                    console.log('cancel request');
                } else {
                    throw error;
                }
            }
        };

        fetchData();

        return () => {
            source.cancel()
        }
    }, [data]);

    return(
        <Table style={{ width: '35%', marginRight: '120px', marginTop: '40px' }}>

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

            { isLoaded &&
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
            }
        </Table>
    )
};