import React, { useContext, Fragment } from 'react'

import { AdminFuncContext } from '../../../Context/AdminFuncContext';

const UserPermBtns = () => {
    const { setIsRedirect, returnBack } = useContext(AdminFuncContext);

    return(
        <Fragment>
            {returnBack()}
            <button onClick={() => setIsRedirect(true)}>
                Back
            </button>   
        </Fragment>
    )
}

export default UserPermBtns;