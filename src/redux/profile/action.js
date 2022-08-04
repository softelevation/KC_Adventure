import {ActionConstants} from '../constants';
// Agent List

export const profileRequest = payload => {
  return {
    type: ActionConstants.PROFILE_REQUEST,
    payload,
  };
};
export const profileSuccess = data => {
  return {
    type: ActionConstants.PROFILE_SUCCESS,
    data,
  };
};
export const profileError = error => {
  return {
    type: ActionConstants.PROFILE_ERROR,
    error,
  };
};
