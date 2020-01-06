import { combineReducers } from 'redux';
import users from './users/users';
import devices from './devices/devices';
import chart from './chart/chart';

export default combineReducers({
    users,
    devices,
    chart
})