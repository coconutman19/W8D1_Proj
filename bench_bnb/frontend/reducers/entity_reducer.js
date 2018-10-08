import { combineReducers } from 'redux';
import usersReducer from './users_reducer';

const entititiesReducer = combineReducers({users: usersReducer});

export default entititiesReducer;
