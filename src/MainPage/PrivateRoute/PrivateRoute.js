import React, { useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { RoleContext } from '../../LoginPage/RoleContext/RoleContext';

export const PrivateRoute = ({ children, ...rest }) => {
    const { role } = useContext(RoleContext);
    return(
        <Route
            {...rest}
            render={ ({location}) =>
                role && localStorage.getItem('jwt') ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                    )
            }
        />
    )
};