import * as Types from '../../types/types';

export const getUsers = users => {
    const payload = users;

    return {
        type: Types.GET_USERS,
        payload
    }
};