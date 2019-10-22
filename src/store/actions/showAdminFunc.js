const SHOW_ADMIN_FUNC = 'SHOW_ADMIN_FUNC';

export const showAdminAction = () => {
    const payload = {
        showUsers: false,
        showAdminFunc: true
    }

    return {
        type: SHOW_ADMIN_FUNC,
        payload
    }
}