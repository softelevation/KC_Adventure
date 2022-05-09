import {combineReducers} from 'redux';
import auth from './login/reducer';
import location from './location/reducer';
import {ActionConstants} from './constants';

const appReducer = combineReducers({
  location,
  auth,
});
const rootReducer = (state, action) => {
  if (action.type === ActionConstants.RESET_STORE) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
