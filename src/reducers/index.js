import { combineReducers } from 'redux';

// == Import reducers
import contactReducer from './contactReducer';

const rootReducer = combineReducers({
  contact: contactReducer,
});

export default rootReducer;
