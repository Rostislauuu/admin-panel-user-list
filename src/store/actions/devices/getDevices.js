import * as Types from '../../types/types';

export const getDevices = devices => {
    const payload = devices;

    return {
        type: Types.GET_DEVICES,
        payload
    }
};