import React from 'react';
import { connect } from 'react-redux';

import { showUsersAction } from '../store/actions/showUsers';
import { showAdminAction } from '../store/actions/showAdminFunc';
import { bindActionCreators } from 'redux';

const Sidebar = ({ showUsersAction,  showAdminAction }) => {
    return(
        <nav className="sidebar"> 
            <div className="sidebar-user">
                <p onClick={ () => showUsersAction() }>Users</p>
            </div>
            <div className="sidebar-admin" onClick={() => showAdminAction()}>
                <p>Admin</p>
            </div>
        </nav>
    )
}

const matchDispatchToProps = function(dispatch) {
    return bindActionCreators({
        showUsersAction: showUsersAction,
        showAdminAction: showAdminAction
    }, dispatch)
}

export default connect( null, matchDispatchToProps ) (Sidebar);