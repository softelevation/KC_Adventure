import {ActionConstants} from '../../constants';

export const categoryRequest = () => {
  return {
    type: ActionConstants.CATEGORY_REQUEST,
  };
};
export const categorySuccess = data => {
  return {
    type: ActionConstants.CATEGORY_SUCCESS,
    data,
  };
};
export const categoryError = error => {
  return {
    type: ActionConstants.CATEGORY_ERROR,
    error,
  };
};
