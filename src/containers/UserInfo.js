import React from 'react';

const UserInfo = ({ user, handleSetUser, deleteUser }) => {

    const backToList = () => {
        handleSetUser(null);
    }

    // REWORK!!
    // const onDeleteUser = () => {
    //     deleteUser(user.id);
    // }

    return (
        <div className="information-user-selected">
            <img alt="Vakoms"
                src="http://www.usupport.in.ua/uploads/company/picture/302/view_vakoms_logo_.png" />
            <p>{user.fullName}</p>
            <p>{user.birthday}</p>
            <p>{user.direction}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <button onClick={backToList}>Back</button>
            <button>Delete</button>
        </div>
    )
}

export default UserInfo;