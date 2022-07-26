import {ActionConstants} from 'src/redux/constants';

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
