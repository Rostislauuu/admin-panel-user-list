import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { RoleContext } from '../../LoginPage/RoleContext/RoleContext';
import Button from '@material-ui/core/Button';

export const Header = () => {
    const { logOut } = useContext(RoleContext);

    return (
        <header className="header">
            <Link to="/main-page">
                <img className="header-image" alt="Vakoms"
                    src="http://www.usupport.in.ua/uploads/company/picture/302/view_vakoms_logo_.png"
                />
            </Link>

            <Button variant="contained" color="primary" onClick={logOut}
                    style={{ width: '11%' }}
            >
                Log Out
            </Button>
        </header>
    )
};