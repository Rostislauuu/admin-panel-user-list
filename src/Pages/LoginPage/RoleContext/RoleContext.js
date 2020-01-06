import React, { createContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from "axios";
import { getUsers } from '../../../store/actions/users/getUsers';
import { getDevices } from '../../../store/actions/devices/getDevices';
import { getChartData } from '../../../store/actions/chart/getChartData';

export const RoleContext = createContext();

export const RoleContextProvider = ({ children }) => {
    const dispatch = useDispatch();

    useEffect( () => {
        const source = axios.CancelToken.source();
        const fetchData = async () => {
            try {
                const [ userResponse, devicesResponse, chartResponse ] = await Promise.all([
                    axios.get('http://test-api-vakoms.herokuapp.com/users', { cancelToken: source.token }),
                    axios.get('http://test-api-vakoms.herokuapp.com/users_devices', { cancelToken: source.token }),
                    axios.get('http://test-api-vakoms.herokuapp.com/charts/data', { cancelToken: source.token})
                ]);

                dispatch( getUsers(userResponse.data) );
                dispatch( getDevices(devicesResponse.data) );
                dispatch( getChartData(chartResponse.data) );

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
    }, []);

    const permission = {
        initialRole: null,
        user: 'user',
        admin: 'admin',
        unknown: 'unknown'
    };
    const [ role, setRole ] = useState(permission.initialRole);

   const logOut = () => {
        localStorage.removeItem('jwt');
        localStorage.removeItem('permission');
        setRole(null);
   };

    return(
        <RoleContext.Provider value={{ role, permission, logOut, setRole } }>
            {children}
        </RoleContext.Provider>
    )
};