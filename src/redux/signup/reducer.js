import {combineReducers} from 'redux';
import {ActionConstants} from '../constants';
const initialState = {
  loading: false,
  data: {},
  error: '',
  isSuccess: false,
  profile: {},
};
export function signup(state = initialState, action) {
  switch (action.type) {
    case ActionConstants.SIGNUP_REQUEST:
      return {
        ...state,
        data: action.data,
        loading: true,
      };
    case ActionConstants.SIGNUP_SUCCESS:
      return {
        ...state,
        data: action.data,
        isSuccess: true,
        loading: false,
      };
    case ActionConstants.SIGNUP_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    // case ActionConstants.PROFILE_REQUEST:
    //   return {
    //     ...state,
    //     loading: false,
    //   };
    // case ActionConstants.PROFILE_SUCCESS:
    //   return {
    //     ...state,
    //     profile: action.data,
    //     loading: false,
    //   };
    // case ActionConstants.PROFILE_ERROR:
    //   return {
    //     ...state,
    //     error: action.error,
    //     loading: false,
    //   };

    default:
      return state;
  }
}

const authSign = combineReducers({
  signup,
});
export default authSign;
