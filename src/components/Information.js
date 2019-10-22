import React from 'react';
import { connect } from 'react-redux';

import User from '../containers/User';
import AdminFunc from '../containers/AdminFunc';

const Information = ({ users, showUsers, showAdminFunc }) => {
    const usersList = users.map( item => {
       return <User key={item.id} user={item.user} />
    })

    return(
        <div className="information-root">
            <div className="information-user-root">{showUsers && usersList}</div>
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