import React, { createContext, useState } from 'react';

export const RoleContext = createContext();

const RoleContextProvider = ({children}) => {
    const permission = {
        initialRole: '',
        user: 'user',
        admin: 'admin',
        unknown: 'unknown'
    }

    const [role, setRole] = useState(permission.initialRole);
    const [fields, setFields] = useState({});

    const handleChangeFields = name => event => {
        const value = event.target.value;
        setFields({ ...fields, [name]: value });
    }

    const handleSubmit = () => {
        const { login, password } = fields;

        if (login === permission.user && password === permission.user) {
            setRole(permission.user);
        } else if (login === permission.admin && password === permission.admin) {
            setRole(permission.admin);
        } else {
            setRole(permission.unknown);
        }

    }

    return(
        <RoleContext.Provider value={ {role, permission, handleChangeFields, handleSubmit} }>
            {children}
        </RoleContext.Provider>
    )
}

export default RoleContextProvider;