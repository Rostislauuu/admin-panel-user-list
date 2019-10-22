import { combineReducers } from 'redux';

import users from './users';
import access from './access';

export default combineReducers({
    users,
    access
})