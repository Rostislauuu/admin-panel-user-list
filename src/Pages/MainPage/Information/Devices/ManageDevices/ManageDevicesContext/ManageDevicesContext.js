import React, { useState, useEffect, createContext } from 'react';
import axios from "axios";

export const ManageDevicesContext = createContext();

export const ManageDevicesContextProvider = ({ children }) => {
    const [ devices, setDevices ] = useState([]);
    const [ users, setUsers ] = useState([]);
    const [ isLoaded, setIsLoaded ] = useState(false);

    useEffect( () => {
        const source = axios.CancelToken.source();
        const fetchData = async () => {
            try {
                const [ userResponse, devicesResponse ] = await Promise.all([
                    axios.get('http://test-api-vakoms.herokuapp.com/users', { cancelToken: source.token }),
                    axios.get('http://test-api-vakoms.herokuapp.com/users_devices', { cancelToken: source.token })
                ]);

                setUsers(userResponse.data);
                setDevices(devicesResponse.data);
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
    }, []);

    return(
        <ManageDevicesContext.Provider value={{ devices, users, isLoaded }}>
            { children }
        </ManageDevicesContext.Provider>
    )
};