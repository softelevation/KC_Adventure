import {combineReducers} from 'redux';
import auth from './login/reducer';
import authSign from './signup/reducer';
import location from './location/reducer';
import authprofile from './profile/reducer';
import category from './dashboard/category/reducer';
import experienceReducer from './dashboard/experience/reducer';
import wishlists from './wishlist/reducer';
import {ActionConstants} from './constants';
const appReducer = combineReducers({
  location,
  auth,
  authSign,
  authprofile,
  category,
  wishlists,
  experienceReducer,
});
const rootReducer = (state, action) => {
  if (action.type === ActionConstants.RESET_STORE) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
