import * as Types from '../../types/types';

export const deleteDevice = id => {
    return {
        type: Types.DELETE_DEVICE,
        id
    }
};