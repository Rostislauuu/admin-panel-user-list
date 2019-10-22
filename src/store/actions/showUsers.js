const SHOW_USER = 'SHOW_USER';

export const showUsersAction = () => {
    const payload = {
        showUsers: true,
        showAdminFunc: false
    }

    return {
        type: SHOW_USER,
        payload
    }
}