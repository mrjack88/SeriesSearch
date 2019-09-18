import { combineReducers } from 'redux';
import shows from './shows';
import user from './user';

const rootReducer = combineReducers({
  shows,
  user
});

export default rootReducer;
