import * as Types from '../../types/types';
const initialState = [];

export default function devices( state = initialState, action ) {
    switch(action.type) {
        case Types.GET_CHART_DATA:
            return action.payload;
        default: return state
    }
};