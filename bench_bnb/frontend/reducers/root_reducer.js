import {combineReducers} from 'redux';
import entititiesReducer from './entity_reducer';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';

const rootReducer = combineReducers({
  entities: entititiesReducer,
  session: sessionReducer,
  errors: errorsReducer
});

export default rootReducer;
