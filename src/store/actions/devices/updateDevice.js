import * as Types from '../../types/types';

export const updateDevice = device => {
    const payload = device;

    return {
        type: Types.UPDATE_DEVICE,
        payload
    }
};