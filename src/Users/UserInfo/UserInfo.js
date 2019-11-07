import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UserDetails } from '../../Components/UserDetails/UserDetails';
import { UserForm } from '../../Common/UserForm';
import { UserInfoImg } from './UserInfoImg/UserInfoImg';
import { UserInfoBtns } from './UserInfoBtns/UserInfoBtns';
import { AdminContextProvider }  from '../../Admin/AdminContext/AdminContext';

export const UserInfo = () => {
    const [ selectedUser, setSelectedUser ] = useState({});
    let { id } = useParams();

    useEffect( () => {
        const fetchData = async () => {
            const response = await fetch(`http://test-api-vakoms.herokuapp.com/users/${id}`);
            const data = await response.json();
            setSelectedUser(data);
        };

        fetchData();
    }, [] );

    const [ isUpdating, setIsUpdating ] = useState(false);

    const handleChangeField = fields => {
        setSelectedUser(fields);
    };

    const { fullName, birthday, direction, email, phone } = selectedUser;
    const handleSubmit = () => {
        if( fullName && birthday && direction && email && phone ) {
            fetch(`http://test-api-vakoms.herokuapp.com/users/${id}`, {
                method: 'PUT',
                header: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(selectedUser)
            }) 
        } else {
            alert('Fill all fields');
        }
        
        setIsUpdating(false);
    };

    return(
        <div className="information-user-selected">
            { !isUpdating &&
                <div className="user-details-not-editing">

                    <UserInfoImg
                        selectedUser={selectedUser}
                    />
                    <div className="user-details-buttons">
                        <UserDetails
                            user={selectedUser}
                        />

                        <AdminContextProvider>
                            <div className="buttons">
                                <UserInfoBtns
                                    setIsUpdating={setIsUpdating}
                                />
                            </div>
                        </AdminContextProvider>

                    </div>
                </div>
            }
            {isUpdating && 
                <div className="user-editing">

                    <UserForm
                        user={selectedUser}
                        handleChangeField={handleChangeField}
                    />

                    <button onClick={handleSubmit} style={{ width: '11%' }}> 
                        Submit
                    </button>
                </div>
            }
        </div>
    )
};