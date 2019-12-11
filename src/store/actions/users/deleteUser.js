import * as Types from '../../types/types';

export const deleteUser = id => {
    return {
        type: Types.DELETE_USER,
        id
    }
};