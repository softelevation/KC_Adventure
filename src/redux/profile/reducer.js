import {combineReducers} from 'redux';
import {ActionConstants} from '../constants';
const initialState = {
  loading: false,
  data: {},
  error: '',
  isSuccess: false,
  profile: {},
};
export function profile(state = initialState, action) {
  switch (action.type) {
    case ActionConstants.PROFILE_REQUEST:
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case ActionConstants.PROFILE_SUCCESS:
      return {
        ...state,
        data: action.data,
        isSuccess: true,
        loading: false,
      };
    case ActionConstants.PROFILE_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
}
const authprofile = combineReducers({
  profile,
});
export default authprofile;
