import {ActionConstants} from '../constants';
const initialState = {
  loading: false,
  data: [],
  error: '',
  isSuccess: false,
};
export function wishlists(state = initialState, action) {
  switch (action.type) {
    case ActionConstants.WISHLIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionConstants.WISHLIST_SUCCESS:
      return {
        ...state,
        data: action.data,
        isSuccess: true,
        loading: false,
      };
    case ActionConstants.WISHLIST_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
}
export default wishlists;
