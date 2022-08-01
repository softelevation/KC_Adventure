import {ActionConstants} from 'src/redux/constants';

export const wishlistRequest = data => {
  return {
    type: ActionConstants.WISHLIST_REQUEST,
    data,
  };
};
export const wishlistSuccess = data => {
  return {
    type: ActionConstants.WISHLIST_SUCCESS,
    data,
  };
};
export const wishlistError = error => {
  return {
    type: ActionConstants.WISHLIST_ERROR,
    error,
  };
};
