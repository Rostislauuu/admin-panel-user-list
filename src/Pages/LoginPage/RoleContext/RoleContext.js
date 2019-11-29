import React, { createContext, useState } from 'react';

export const RoleContext = createContext();

export const RoleContextProvider = ({children}) => {
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