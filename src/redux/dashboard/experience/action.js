import {ActionConstants} from 'src/redux/constants';

export const experienceRequest = data => {
  return {
    type: ActionConstants.EXPERIENCE_REQUEST,
    data,
  };
};
export const experienceSuccess = data => {
  return {
    type: ActionConstants.EXPERIENCE_SUCCESS,
    data,
  };
};
export const experienceError = error => {
  return {
    type: ActionConstants.EXPERIENCE_ERROR,
    error,
  };
};
