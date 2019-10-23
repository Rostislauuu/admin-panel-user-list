import React, { useState } from 'react';
import { connect } from 'react-redux';

import User from '../containers/User';
import UserInfo from '../containers/UserInfo';
import AdminFunc from '../containers/AdminFunc';

const Information = ({ users, showUsers, showAdminFunc }) => {
    const  [ isUser, setIsUser ] = useState(null);

    const handleSetUser = (user) => {
        setIsUser(user);
    }

    const usersList = users.map( item => {
       return <User onSetUser={handleSetUser} key={item.id} user={item} />
    })
 
    return(
        <div className="information-root">
            <div className="information-user-root">{isUser && <UserInfo user={isUser} handleSetUser ={handleSetUser}  />}</div>
            <div className="information-user-root">{(showUsers && !isUser)  && usersList  }</div>
            <div className="information-admin-root">{showAdminFunc && <AdminFunc />}</div>
        </div>
    )
}

const mapStateToProps = function (state) {
    return {
        users: state.users,
        showUsers: state.access.showUsers,
        showAdminFunc: state.access.showAdminFunc
    }
}

export default connect( mapStateToProps, null) (Information);