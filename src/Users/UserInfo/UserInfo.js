import React, { useState, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';

import UserDetails from './UserDetails';

const UserInfo = () => {
    const [ selectedUser, setSelectedUser ] = useState({});
    const { fullName, img }  = selectedUser;

    let { id } = useParams();

    useEffect( () => {
        const fetchData = async () => {
            const response = await fetch(`http://test-api-vakoms.herokuapp.com/users/${id}`);
            const data = await response.json();
            setSelectedUser(data);
        }

        fetchData();
    }, [] )

    const [ isRedirect, setIsRedirect ] = useState(false);
    const returnBack = () => {

        if(isRedirect) {
            return <Redirect to="/main-page/users" />
        }
        
    }

    return (
        <div className="information-user-selected">
            <div className="user-details-not-editing"> 
                <div className="user-details-img">
                    <img alt="Vakoms" src={img} />
                    <label>
                        Name
                    </label>
                    <p>
                        {fullName}
                    </p>
                </div>
            <div className="user-details-buttons">
                <UserDetails
                    user={selectedUser}
                />
                <div className="buttons">
                    {returnBack()}
                    <button onClick={ () => setIsRedirect(true) }>
                        Back
                    </button>
                    <button >
                        Update
                    </button>
                    <button>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default UserInfo;