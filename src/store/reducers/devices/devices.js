import * as Types from '../../types/types';
const initialState = [];

export default function devices ( state = initialState, action ) {
    switch(action.type) {
        case Types.GET_DEVICES:
            return action.payload;

        case Types.ADD_DEVICE:
            return [ ...state, action.payload[action.payload.length - 1] ]; // Taking last element of request(Added device)

        case Types.DELETE_DEVICE:
            return state.filter( item => item.id !== action.id );

        case Types.APPLY_DEVICE:
            return [
                ...state.slice( 0, state.findIndex( obj => obj.id === action.payload.id) ),
                action.payload,
                ...state.slice( state.findIndex( obj => obj.id === action.payload.id ) + 1 )
            ];

        case Types.UPDATE_DEVICE:
            // axios.put(`http://test-api-vakoms.herokuapp.com/users_devices/${values.device}`, {
            //     device_name: values.newValue
            // });

            // return [
            //     ...state.slice( 0, state.findIndex( obj => obj.id === action.payload.device ) ),
            //      PUT HERE UPDATED OBJECT
            //     ...state.slice( state.findIndex( obj => obj.id === action.payload.device ) + 1 )
            // ];

        default: return state
    }
};