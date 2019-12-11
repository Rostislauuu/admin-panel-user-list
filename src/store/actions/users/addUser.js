import * as Types from '../../types/types';

export const addUser = user => {
    const payload = user;

    return {
        type: Types.ADD_USER,
        payload
    }
};