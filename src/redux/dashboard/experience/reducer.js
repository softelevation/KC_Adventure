import {ActionConstants} from '../../constants';
const initialState = {
  loading: false,
  data: [],
  error: '',
  isSuccess: false,
};
export function experience(state = initialState, action) {
  switch (action.type) {
    case ActionConstants.EXPERIENCE_SUCCESS:
      return {
        ...state,
        data: action.data,
        isSuccess: true,
        loading: false,
      };
    case ActionConstants.EXPERIENCE_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
}
// const dashboardReducer = combineReducers({
//   experience,
// });
export default experience;
