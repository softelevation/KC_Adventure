import {combineReducers} from 'redux';
import {ActionConstants} from '../constants';
const initialState = {
  loading: false,
  data: {},
  error: '',
  isSuccess: false,
  profile: {},
};
export function category(state = initialState, action) {
  switch (action.type) {
    case ActionConstants.CATEGORY_REQUEST:
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case ActionConstants.CATEGORY_SUCCESS:
      return {
        ...state,
        data: action.data,
        isSuccess: true,
        loading: false,
      };
    case ActionConstants.CATEGORY_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
}
const categoryReducer = combineReducers({
  category,
});
export default categoryReducer;
