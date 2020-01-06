import * as Types from '../../types/types';

export const addDevice = device => {
    const payload = device;

    return {
        type: Types.ADD_DEVICE,
        payload
    }
};