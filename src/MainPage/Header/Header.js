import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { RoleContext } from '../../LoginPage/RoleContext/RoleContext';

export const Header = () => {
    const { logOut } = useContext(RoleContext)

    return (
        <header className="header">
            <Link to="/main-page">
                <img className="header-image" alt="Vakoms"
                    src="http://www.usupport.in.ua/uploads/company/picture/302/view_vakoms_logo_.png"
                />
            </Link>

            <button onClick={logOut}>
                Log Out
            </button>
        </header>
    )
};