import axios from 'axios';
import * as Types from '../../types/types';

const initialState = [];

export default function users ( state = initialState, action ) {
    switch(action.type) {
        case Types.GET_USERS:
            return action.payload;

        case Types.ADD_USER:
            axios.post('http://test-api-vakoms.herokuapp.com/users/', action.payload);
            return [...state, action.payload];

        case Types.UPDATE_USER:
            axios.put(`http://test-api-vakoms.herokuapp.com/users/${action.payload.id}`, action.payload);
            return [
                ...state.slice( 0, state.findIndex( obj => obj.id === action.payload.id) ),
                action.payload,
                ...state.slice( state.findIndex( obj => obj.id === action.payload.id) + 1 )
            ];

        case Types.DELETE_USER:
            axios.delete(`http://test-api-vakoms.herokuapp.com/users/${action.id}`);
            return state.filter( item => item.id !== action.id );

        default: return state
    }
};