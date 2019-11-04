import React, { createContext, useState } from 'react';
import { Redirect } from 'react-router-dom';

export const AdminFuncContext = createContext();

const AdminFuncContextProvider = ({ children }) => {
    const [isRedirect, setIsRedirect] = useState(false);
    const returnBack = () => {

        if (isRedirect) {
            return <Redirect to="/main-page/users" />
        }

    }

    const deleteUser = (id) => {
        fetch(`http://test-api-vakoms.herokuapp.com/users/${id}` , {
            method: 'DELETE'
        });
        
        if (isRedirect) {
            return <Redirect to="/main-page/users" />
        }
        
    }

    return(
        <AdminFuncContext.Provider
             value={{ setIsRedirect, returnBack, deleteUser }}
        >
            {children}
        </AdminFuncContext.Provider>
    )
}

export default AdminFuncContextProvider;