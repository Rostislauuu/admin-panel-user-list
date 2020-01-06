import * as Types from '../../types/types';

export const applyDevice = object => {
    const payload = object;

    return {
        type: Types.APPLY_DEVICE,
        payload
    }
};