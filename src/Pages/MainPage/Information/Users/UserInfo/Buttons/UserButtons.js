import React, { useContext, Fragment } from 'react'
import { AdminContext } from '../../../Admin/AdminContext/AdminContext';

export const UserButtons = () => {
    const { setIsRedirect, returnBack } = useContext(AdminContext);

    return(
        <Fragment>
            {returnBack()}
            
            <button onClick={() => setIsRedirect(true)}>
                Back
            </button>   
        </Fragment>
    )
};