import React, { useContext, Fragment } from 'react'
import { AdminContext } from '../../../AddUser/AdminContext/AdminContext';
import Button from '@material-ui/core/Button';

export const UserButtons = () => {
    const { setIsRedirect, returnBack } = useContext(AdminContext);

    return(
        <Fragment>
            {returnBack()}
            
            <Button variant="contained" color="primary" onClick={() => setIsRedirect(true)}>
                Back
            </Button>
        </Fragment>
    )
};