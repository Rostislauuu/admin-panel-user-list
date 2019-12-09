import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UserDetails } from '../../../../../Components/UserDetails/UserDetails';
import { UserFormValidation } from '../../../../../Components/UserForm/UserForm';
import { UserInfoImg } from './UserInfoImg/UserInfoImg';
import { Buttons } from './Buttons/Buttons';
import { AdminContextProvider }  from '../../AddUser/AdminContext/AdminContext';
import { useDispatch } from "react-redux";

export const UserInfo = () => {
    const [ selectedUser, setSelectedUser ] = useState({});
    const [ isUpdating, setIsUpdating ] = useState(false);
    const dispatch = useDispatch();
    let { id } = useParams();

    const fetchData = async () => {
        const response = await fetch(`http://test-api-vakoms.herokuapp.com/users/${id}`);
        const data = await response.json();
        setSelectedUser(data);
    };

    useEffect( () => {
        fetchData();
    }, [] );

    return(
        <div className="information-user-selected">
            { !isUpdating &&
                <div className="user-details-not-editing">

                    <UserInfoImg selectedUser={selectedUser}/>
                    <div className="user-details-buttons">
                        <UserDetails user={selectedUser}/>

                        <AdminContextProvider>
                            <div className="buttons">
                                <Buttons setIsUpdating={setIsUpdating}/>
                            </div>
                        </AdminContextProvider>

                    </div>
                </div>
            }

            { isUpdating && 
                <div className="user-editing">
                    <UserFormValidation id={id} selectedUser={selectedUser} dispatch={dispatch}
                        setIsUpdating={setIsUpdating} setSelectedUser={setSelectedUser}
                    />
                </div>
            }
        </div>
    )
};