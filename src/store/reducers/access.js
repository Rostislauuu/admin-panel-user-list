const SHOW_USER = 'SHOW_USER';
const SHOW_ADMIN_FUNC = 'SHOW_ADMIN_FUNC';

const initialState = {
    showUsers: false,
    showAdminFunc: false
}

export default function access( state = initialState, action) {
    switch(action.type){
        case SHOW_USER: 
            return action.payload
        case SHOW_ADMIN_FUNC:
            return action.payload
        default: return state
    }
}