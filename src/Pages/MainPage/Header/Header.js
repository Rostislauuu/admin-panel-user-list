import React, { useContext} from 'react';
import Button from '@material-ui/core/Button';
import vakomsLogo from '../../../assets/new_vakoms_logo_.png';
import { Link } from 'react-router-dom';
import { RoleContext } from '../../LoginPage/RoleContext/RoleContext';

export const Header = () => {
    const { logOut } = useContext(RoleContext);

    return (
        <header className="header">
            <Link to="/main-page">
                <img className="header-image" alt="Vakoms" src={vakomsLogo} />
            </Link>

            <Button variant="contained" color="primary" onClick={logOut} style={{ width: '11%' }} >
                Log Out
            </Button>
        </header>
    )
};