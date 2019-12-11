import * as Types from '../../types/types';

export const updateUser = user => {
    const payload = user;

    return {
        type: Types.UPDATE_USER,
        payload
    }
};