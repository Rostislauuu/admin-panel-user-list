import React from 'react';
import { Link } from 'react-router-dom';

export const UserCard = ({ user }) => {
    return (
        <Link 
            to={`/main-page/users/${user.id}`}
            className="col-1-6 col-1-4 col-1-3 col-1-2" 
            style={{ textDecoration: 'none', color: '#212121' }}
        >
            <div className="user">

                <div className="user-photo">
                    <img alt="Vakoms" src={user.img} />
                </div>

                <div className="user-name">
                    <p>
                        {user.fullName}
                    </p>
                </div>
                
            </div>
        </Link>
    )
};